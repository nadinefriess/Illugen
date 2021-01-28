import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from './../data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{
  public maxCategoryTerms:number;
  public maxTopicTerms:number;
  public maxTopics:number;

  constructor (public dataService: DataService){}

  ngOnInit(){
    this.maxCategoryTerms = this.dataService.getSmallestLengthOfLists('category')
    this.maxTopicTerms = this.dataService.getSmallestLengthOfLists('topic')
    this.maxTopics = this.dataService.getNumberOfTopics();
  }

  form= new FormGroup({
    termsPerCategory: new FormControl(),
    termsPerTopics: new FormControl(),
    numberOfTopics: new FormControl()
  });
  
}
