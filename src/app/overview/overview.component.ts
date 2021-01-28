import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public panelOpenState = false;
  public categoryList:any;
  public topicList:any;

  constructor(public dataService: DataService) {}
  
  ngOnInit(): void {
    this.categoryList = this.dataService.getListByName('category');
    this.topicList = this.dataService.getListByName('topic');
  }

}
