import { Component } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from 'rxjs';
import { selectCategories, selectTopics } from 'src/app/state/selectors';
import { Category, Topic } from 'src/app/state/state';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent{
  panelOpenState = false;
  categoryList$: Observable<Category[]> = this.store.pipe(select(selectCategories));
  topicList$: Observable<Topic[]> = this.store.pipe(select(selectTopics));

  constructor(private store: Store) {}
}
