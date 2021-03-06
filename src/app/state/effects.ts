import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { AppService } from '../services/service';

@Injectable()
export class AppEffects {

  createRandomTerms$ = createEffect(()=>
    this.actions$.pipe(
      ofType('[App] Create Random Terms'),
      switchMap(()=> this.appService.getRandomTerms().pipe(
          map(randomTerms => ({type: '[App] Create Random Terms Success', randomTerms })),
          catchError(()=> EMPTY)
        )
      )
    )
  )
        
  incrementSetting$ = createEffect(() => 
    this.actions$.pipe(
      ofType('[Settings] Increment Setting'),
      switchMap(
        ({settingName}) => this.appService.checkMaxValueBySettingName(settingName).pipe(
          map(settingName => ({ type: '[Settings] Increment Setting Success', settingName })),
          catchError(() => EMPTY)
        )
      )
    )
  )
              
  decrementSetting$ = createEffect(() => 
    this.actions$.pipe(
      ofType('[Settings] Decrement Setting'),
      switchMap(
      ({settingName}) => this.appService.checkMinValueBySettingName(settingName).pipe(
          map(settingName => ({ type: '[Settings] Decrement Setting Success', settingName: settingName })),
          catchError(() => EMPTY)
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {}
}