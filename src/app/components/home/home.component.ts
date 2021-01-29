import { Component, Inject } from '@angular/core';
// import { AppService } from '../..app.service';
import { AppStore } from 'src/app/app.store';
import { Store } from 'redux';
import { AppState } from 'src/app/types/app.state';
import { AppService } from '../../services/app.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Illugen';
  result: string[];
  categoryList

  // constructor(public AppService: AppService) {}
  constructor(@Inject(AppStore) private store: Store<AppState>, public appService: AppService) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  private readState() {
    const state: AppState = this.store.getState() as AppState;
    this.categoryList = state.categoryList;
  }

  public onGenerateClick():void{
    this.result = this.appService.getRandomTerms();
  }
}
