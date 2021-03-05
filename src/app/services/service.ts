import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, from, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { Category, Topic } from '../state/state';
import * as fromSelectors from '../state/selectors';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private randomTermList$: Observable<string[]>;
  private smallesLength$: Observable<1>
  public categoryList$: Observable<Category[]> = this.store.pipe(select(fromSelectors.selectCategories));
  public topicList$: Observable<Topic[]> = this.store.pipe(select(fromSelectors.selectTopics));
  public maxCategoryTerms$:Observable<number> = this.store.pipe(select(fromSelectors.selectMaxCategoryTerms));
  public maxTopicTerms$:Observable<number> = this.store.pipe(select(fromSelectors.selectMaxTopicTerms));
  public maxTopics$:Observable<number>  = this.store.pipe(select(fromSelectors.selectMaxTopics));
  public termsPerCategory$:Observable<number> =this.store.pipe(select(fromSelectors.selectTermsPerCategory));
  public termsPerTopic$:Observable<number> =this.store.pipe(select(fromSelectors.selectTermsPerTopic));
  public numberOfTopics$:Observable<number> =this.store.pipe(select(fromSelectors.selectNumberOfTopics));

  constructor(private store: Store) {}

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

  private checkMax(obs1:Observable<number>,obs2:Observable<number>):boolean{
    var checkMax = false;
     combineLatest([
       obs1,
       obs2
     ]).pipe(
       map((combined)=>{
        if(combined[0]<combined[1])
        return true;
       })
     ).subscribe(value=> checkMax=value).unsubscribe();
     return checkMax;
   }

   private checkMin(obs1:Observable<number>):boolean{
    var checkMin = false;
    obs1.pipe(
      map(number=>{
       if(number > 1)
       return true;      
      })
    ).subscribe(value=>checkMin=value).unsubscribe();
    return checkMin;
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

  public checkMaxValueBySettingName(settingName:string):Observable<string>{
    switch(settingName){
      case 'termsPerCategory': {
        if(this.checkMax(this.termsPerCategory$,this.maxCategoryTerms$))
        return of(settingName);
        break;
      }
      case 'termsPerTopic': {
        if(this.checkMax(this.termsPerTopic$,this.maxTopicTerms$))
        return of(settingName);
        break;
      }
      case 'numberOfTopics': {
        if(this.checkMax(this.numberOfTopics$,this.maxTopics$))
        return of(settingName);
        break;
      }
      default: return of('');
    }  
  }

   public checkMinValueBySettingName(settingName:string): Observable<string>{
    switch(settingName){
      case 'termsPerCategory':{
        if(this.checkMin(this.termsPerCategory$)) 
        return of(settingName);
        break;
      }
      case 'termsPerTopic':{
        if(this.checkMin(this.termsPerTopic$)) 
        return of(settingName);
        break;
      }
      case 'numberOfTopics':{
        if(this.checkMin(this.numberOfTopics$)) 
        return of(settingName);
        break;
      }
      default: return from('');
    }
   }
}

