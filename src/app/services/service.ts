import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest} from 'rxjs';
import { map } from 'rxjs/operators';
import { Category, Topic } from '../state/state';
import { selectCategories, selectTopics, selectSettings } from '../state/selectors';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private randomTermList$: Observable<string[]>;
  private smallesLength$: Observable<1>
  public categoryList$: Observable<Category[]>;
  public topicList$: Observable<Topic[]>;
  public maxCategoryTerms$:Observable<number>;
  public maxTopicTerms$:Observable<number>;
  public maxTopics$:Observable<number>;
  
  constructor(private store: Store) {
    this.categoryList$ = this.store.pipe(select(selectCategories));
    this.topicList$ = this.store.pipe(select(selectTopics));
    this.maxCategoryTerms$ = this.getSmallestLengthOfLists('category');
    this.maxTopicTerms$ = this.getSmallestLengthOfLists('topic');
    this.maxTopics$ = this.getNumberOfTopics();
  }

  private returnRendomIndexFromTermList(listLength:number):number{
    const RANDOM = Math.floor(Math.random() * listLength);
    return RANDOM;
  }

  private collectRandomTerms(list:Category[]|Topic[]):string[]{
    var randomTerms = [];
    list.forEach((item, ind) => {
      var randomIndex = this.returnRendomIndexFromTermList(list[ind].terms.length);
      randomTerms.push(item.terms[randomIndex]);
    });
    return randomTerms;
  }

  private checkSmallestLength(listName:string):Observable<number>{ 
    var lists = [];
    return this[listName+'List$'].pipe(
      map((list:Category[]|Topic[]) => {
        list.forEach((item)=>{
          lists.push(item.terms.length)
        })
        return Math.min(...lists);
      })
    )
  }
  
  public getRandomTerms():Observable<string[]>{
    this.randomTermList$ = combineLatest([
      this.categoryList$,
      this.topicList$,
    ]).pipe(
      map(
      (combinedList:[Category[],Topic[]])=>{
        var result = [];
        combinedList.forEach(list => 
          result = [...result,... this.collectRandomTerms(list)]
        );
        return result;
      }
    ))
    return this.randomTermList$;
  }

  public getSmallestLengthOfLists(listName:string):Observable<number>{
    switch(listName){
      case 'category': return this.checkSmallestLength(listName);  
      break;
      case 'topic': return this.checkSmallestLength(listName);
      break;
      default: return this.smallesLength$;
    }
  } 

  public getSettingValueByName(settingName: string):Observable<number>{
    return this.store.pipe(select(selectSettings),
      map(settings=>{
        switch(settingName){
          case 'termsPerCategory': return settings.termsPerCategory;
          break;
          case 'termsPerTopic': return settings.termsPerTopic;
          break;
          case 'numberOfTopics': return settings.numberOfTopics;
          break;
          default: return 1;
        }
      })
    )
  }

  public getNumberOfTopics():Observable<number>{
    return this.topicList$.pipe(map(topics=>topics.length));
  }
}

