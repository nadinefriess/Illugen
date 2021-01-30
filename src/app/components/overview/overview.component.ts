import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Category, Topic } from 'src/app/types/app.state';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  panelOpenState = false;
  categoryList:Category[]|Topic[];
  topicList:Category[]|Topic[];
  data:any;

  constructor(public appService: AppService) {}
  
  ngOnInit():void {
   this.categoryList = this.appService.getListByName('category');
   this.topicList = this.appService.getListByName('topic');
  }

}
