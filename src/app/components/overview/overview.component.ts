import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from 'rxjs';
import { selectCategories, selectTopics } from 'src/app/state/app.selectors';
import { Category, Topic } from 'src/app/state/app.state';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit{
  panelOpenState = false;
  categoryList$: Observable<Category[]>
  topicList$: Observable<Topic[]>

  constructor(private store: Store) {}

  ngOnInit(){
    this.categoryList$ = this.store.pipe(select(selectCategories));
    this.topicList$ = this.store.pipe(select(selectTopics));
  }
}
