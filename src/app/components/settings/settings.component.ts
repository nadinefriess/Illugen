import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{
  public maxCategoryTerms:number;
  public maxTopicTerms:number;
  public maxTopics:number;
  public termsPerCategory = 1;
  public termsPerTopic = 1;
  public numberOfTopics = 1;
  
  constructor (public appService: AppService){}

  ngOnInit(){
    this.maxCategoryTerms = this.appService.getSmallestLengthOfLists('category')
    this.maxTopicTerms = this.appService.getSmallestLengthOfLists('topic')
    this.maxTopics = this.appService.getNumberOfTopics();
    this.numberOfTopics = this.maxTopics;
  }

  increment(type:string):void{
    debugger;
    switch(type){
      case 'termsPerCategory': 
      if(this.termsPerCategory<this.maxCategoryTerms)
      this.termsPerCategory++;
      break;
      case 'termsPerTopic': 
      if(this.termsPerTopic<this.maxTopicTerms)
      this.termsPerTopic++ ;
      break;
      case 'numberOfTopics': 
      if(this.numberOfTopics<this.maxTopics)
      this.numberOfTopics++ ;
      break;
    }
  }

  decrement(type:string):void{
    debugger;
    switch(type){
      case 'termsPerCategory': 
      if(this.termsPerCategory !=0) 
      this.termsPerCategory-- ;
      break;
      case 'termsPerTopic': 
      if(this.termsPerTopic !=0) 
      this.termsPerTopic-- ;
      break;
      case 'numberOfTopics': 
      if(this.numberOfTopics !=0) 
      this.numberOfTopics-- ;
      break;
    }
  }

  save(){
    //dispatch an Action to save new settings
  }
}
