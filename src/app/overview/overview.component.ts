import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/data.json';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public panelOpenState = false;
  public categoryList:any;
  public topicList:any;

  constructor() { }
  
  ngOnInit(): void {
    this.categoryList= [];
    this.topicList= [];
    this.categoryList = data.default.categoryList;
    this.topicList = data.default.topicList;
  }

}
