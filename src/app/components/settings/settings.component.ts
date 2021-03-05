import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromSelectors from 'src/app/state/selectors';
import { decrementSettings, incrementSettings } from '../../state/actions';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent{
  public maxCategoryTerms$:Observable<number> = this.store.pipe(select(fromSelectors.selectMaxCategoryTerms));
  public maxTopicTerms$:Observable<number> = this.store.pipe(select(fromSelectors.selectMaxTopicTerms));
  public maxTopics$:Observable<number>  = this.store.pipe(select(fromSelectors.selectMaxTopics));
  public termsPerCategory$:Observable<number> =this.store.pipe(select(fromSelectors.selectTermsPerCategory));
  public termsPerTopic$:Observable<number> =this.store.pipe(select(fromSelectors.selectTermsPerTopic));
  public numberOfTopics$:Observable<number> =this.store.pipe(select(fromSelectors.selectNumberOfTopics));

  constructor(private store: Store) {}

  public increment(setting:string):void{
    this.store.dispatch(incrementSettings({settingName: setting}));
  }

  public decrement(setting:string):void{
   this.store.dispatch(decrementSettings({settingName: setting}));
  }
}
