import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';
import { decrementSettings, incrementSettings } from '../../state/app.actions';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{
  public maxCategoryTerms$:Observable<number>;
  public maxTopicTerms$:Observable<number>;
  public maxTopics$:Observable<number>;
  public termsPerCategory$:Observable<number>;
  public termsPerTopic$:Observable<number>;
  public numberOfTopics$:Observable<number>;

  constructor(private store: Store, private appService: AppService) {}

  ngOnInit(){
    this.maxCategoryTerms$ = this.appService.maxCategoryTerms$;
    this.maxTopicTerms$ = this.appService.maxTopicTerms$;
    this.maxTopics$ = this.appService.maxTopics$;
    this.termsPerCategory$ = this.appService.getSettingByName('termsPerCategory');
    this.termsPerTopic$ = this.appService.getSettingByName('termsPerTopic');
    this.numberOfTopics$ = this.appService.getSettingByName('numberOfTopics');
  }

  private checkMax(obs1:Observable<number>,obs2:Observable<number>):boolean{
   var checkMax = false;
    combineLatest([
      obs1,
      obs2
    ]).pipe(
      map((combined)=>{
       if(combined[0]<combined[1])
       return true;
      })
    ).subscribe(value=> checkMax=value).unsubscribe();
    return checkMax;
  }

  private checkMin(obs1:Observable<number>):boolean{
    var checkMin = false;
    obs1.pipe(
      map(number=>{
       if(number > 1)
       return true;      
      })
    ).subscribe(value=>checkMin=value).unsubscribe();
    return checkMin;
  }

  public increment(type:string):void{
    switch(type){
      case 'termsPerCategory': 
      if(this.checkMax(this.termsPerCategory$,this.maxCategoryTerms$))
      this.store.dispatch(incrementSettings({settingName: 'termsPerCategory'}));
      break;
      case 'termsPerTopic': 
      if(this.checkMax(this.termsPerTopic$,this.maxTopicTerms$))
      this.store.dispatch(incrementSettings({settingName: 'termsPerTopic'}));
      break;
      case 'numberOfTopics': 
      if(this.checkMax(this.numberOfTopics$,this.maxTopics$))
      this.store.dispatch(incrementSettings({settingName: 'numberOfTopics'}));
      break;
    }
  }

  public decrement(type:string):void{
    switch(type){
      case 'termsPerCategory':
        if(this.checkMin(this.termsPerCategory$)) 
        this.store.dispatch(decrementSettings({settingName: 'termsPerCategory'}));
      break;
      case 'termsPerTopic':
        if(this.checkMin(this.termsPerTopic$)) 
        this.store.dispatch(decrementSettings({settingName: 'termsPerTopic'}));
      break;
      case 'numberOfTopics':
        if(this.checkMin(this.numberOfTopics$)) 
        this.store.dispatch(decrementSettings({settingName: 'numberOfTopics'}));
      break;
    }
  }
}
