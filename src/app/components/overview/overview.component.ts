import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public panelOpenState = false;
  public categoryList:any;
  public topicList:any;

  constructor(public AppService: AppService) {}
  
  ngOnInit(): void {
    this.categoryList = this.AppService.getListByName('category');
    this.topicList = this.AppService.getListByName('topic');
  }

}
