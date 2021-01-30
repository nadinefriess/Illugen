import { Injectable, Inject } from '@angular/core';
import { AppStore } from '../app.store';
import { Store } from 'redux';
import { AppState, Category, Topic } from '../types/app.state';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private categoryList: Category[];
  private topicList: Topic[];
  private randomTermList: string[];
  
  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  private readState() {
    const state: AppState = this.store.getState() as AppState;
    this.categoryList = state.categoryList;
    this.topicList = state.topicList;
  }

  private returnRendomIndexFromTermList(listLength:number):number{
    const RANDOM = Math.floor(Math.random() * listLength);
    return RANDOM;
  }

  private collectRandomTerms(list:Category[]|Topic[]):void{
    list.forEach((item, ind) => {
      var randomIndex = this.returnRendomIndexFromTermList(list[ind].term.length);
      this.randomTermList.push(item.term[randomIndex]);
    });
  }

  private checkSmallestLength(listName:string):number{ 
    var lists = [];
    this[listName+'List'].forEach((item)=>{
      lists.push(item.term.length)
    })
    return Math.min(...lists);
  }
  
  public getRandomTerms():string[]{
    this.randomTermList = []
    this.collectRandomTerms(this.topicList);
    this.collectRandomTerms(this.categoryList);
    return this.randomTermList;
  }

  public getListByName(listName:string):Category[]|Topic[]{
    switch(listName){
      case 'category': return this.categoryList;
      case 'topic': return this.topicList;
      default: return []
    }
  }

  public getSmallestLengthOfLists(listName:string):number{
    switch(listName){
      case 'category': return this.checkSmallestLength(listName);
      case 'topic': return this.checkSmallestLength(listName);
      default: return 1
    }
  }

  public getNumberOfTopics():number{
    return this.topicList.length;
  }
}

