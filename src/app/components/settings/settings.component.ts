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
  
  constructor (public AppService: AppService){}

  ngOnInit(){
    this.maxCategoryTerms = this.AppService.getSmallestLengthOfLists('category')
    this.maxTopicTerms = this.AppService.getSmallestLengthOfLists('topic')
    this.maxTopics = this.AppService.getNumberOfTopics();
    this.numberOfTopics = this.maxTopics;
  }

  onKeyUp(event){
    debugger;
    //listen to event and dispatch action to save different settings
    //this.store.dispatch();
  }
  
}
