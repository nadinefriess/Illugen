import { Component} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createRandomTerms } from 'src/app/state/actions';
import { selectRendomTerms } from 'src/app/state/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  title = 'Illugen';
  rendomTerms$: Observable<string[]> = this.store.pipe(select(selectRendomTerms));

  constructor(public store: Store) {}

  public onGenerateClick():void{
     this.store.dispatch(createRandomTerms());
  }
}
