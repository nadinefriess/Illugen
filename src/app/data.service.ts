import { Injectable } from '@angular/core';
import * as data from '../assets/data.json';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private result:string[];
  
  constructor() { }

  private returnRendomIndexFromTermList(listLength:number):number{
    const RANDOM = Math.floor(Math.random() * listLength);
    return RANDOM;
  }

  private collectRandomTerms(list:[any]):void{
    list.forEach((item, ind) => {
      var randomIndex = this.returnRendomIndexFromTermList(list[ind].term.length);
      this.result.push(item.term[randomIndex]);
    });
  }

  private checkSmallestLength(listName:string):number{ //20, 10.30
    var lists = [];
    data.default[listName+'List'].forEach((item)=>{
      lists.push(item.term.length)
    })
  
    return Math.min(...lists);
  }
  
  public getRandomTerms():string[]{
    this.result = []
    this.collectRandomTerms(data.default.topicList);
    this.collectRandomTerms(data.default.categoryList);
    return this.result;
  }

  public getListByName(listName:string):[any]{
    return data.default[listName+'List'];
  }

  public getSmallestLengthOfLists(listName:string):number{
    return this.checkSmallestLength(listName); 
  }

  public getNumberOfTopics():number{
    return data.default.topicList.length;
  }
}

