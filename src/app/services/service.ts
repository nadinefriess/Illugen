import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, of, throwError} from 'rxjs';
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

  private returnRendomIndexFromList(listLength:number):number{
    const RANDOM = Math.floor(Math.random() * listLength);
    return RANDOM;
  }

  private collectRandomTerms(list:Category[]|Topic[],maxValue:number):string[]{
    let randomTerms = [];
    list.forEach(item => {
      randomTerms = [...randomTerms, ...this.collectRandomListItems(Array.from(item.terms),maxValue)];
    });
    return randomTerms;
  }

  // needs a deep copy list as parameter because of manipulation of the list within this function
  private collectRandomListItems(list:any, count:number):any{
    let randomListItems = [];
    for(let i=0; i<count; i++){
      let randomIndex = this.returnRendomIndexFromList(list.length);
      randomListItems = [...randomListItems, list[randomIndex]]
      list.splice(randomIndex,1)
    }
    return randomListItems;
  }

  private checkSmallestLength(listName:string):Observable<number>{ 
    let lists = [];
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
    let checkMax = false;
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
    let checkMin = false;
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
      this.termsPerCategory$,
      this.topicList$,
      this.termsPerTopic$,
      this.numberOfTopics$,
    ]).pipe(
      map(
        ([categoryList,termsPerCategory,topicList,termsPerTopic,numberOfTopics])=>{
          // select random Topics by setted count
          let topicListBySelectedCount = this.collectRandomListItems(Array.from(topicList),numberOfTopics)

          // TODO: to be implemented
          // let categoryListBySelectedCount = this.collectRandomListItems(Array.from(categoryList),numberOfCategories)

          // return random terms from lists by setted term count
          let result = [];
          result = [...result, ...this.collectRandomTerms(categoryList,termsPerCategory)];
          result = [...result, ...this.collectRandomTerms(topicListBySelectedCount,termsPerTopic)];
          return result;
      }
    ))
    return this.randomTermList$;
  }

  public getSmallestLengthOfLists(listName:string):Observable<number>{
    switch(listName){
      case 'category': 
        return this.checkSmallestLength(listName);  
        break;
      case 'topic': 
        return this.checkSmallestLength(listName);
        break;
      default: 
        return this.smallesLength$;
    }
  } 

  public checkMaxValueBySettingName(settingName:string):Observable<string>{
    let error$ = throwError('Maximum value reached!');
    let result$ = of(settingName); 
    switch(settingName){
      case 'termsPerCategory':
        return this.checkMax(this.termsPerCategory$,this.maxCategoryTerms$)?result$:error$;
        break;
      case 'termsPerTopic': 
        return this.checkMax(this.termsPerTopic$,this.maxTopicTerms$)?result$:error$;
        break;
      case 'numberOfTopics':
        return this.checkMax(this.numberOfTopics$,this.maxTopics$)?result$:error$;
        break;
      default: 
        return throwError('No such setting exist');
    }  
  }

   public checkMinValueBySettingName(settingName:string): Observable<string>{
    let error$ = throwError('Minimum value reached!');
    let result$ = of(settingName); 
    switch(settingName){
      case 'termsPerCategory':
        return this.checkMin(this.termsPerCategory$)?result$:error$;
        break;
      case 'termsPerTopic':
        return this.checkMin(this.termsPerTopic$)?result$:error$;
        break;
      case 'numberOfTopics':
        return this.checkMin(this.numberOfTopics$)?result$:error$;
        break;
      default: 
        return throwError('No such setting exist');
    }
  }
}

