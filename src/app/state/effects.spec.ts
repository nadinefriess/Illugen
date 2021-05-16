import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { AppEffects } from './effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
    incrementSettings,
    incrementSettingsSuccess,
    decrementSettings,
    decrementSettingsSuccess,
    createRandomTerms,
    createRandomTermsSuccess
} from './actions';

import { TestScheduler } from 'rxjs/testing';
import { AppService } from '../services/service';
import { AppState } from './state';
import { appState } from '../../assets/initial-state'

describe('AppEffects', () => {
    const initialState = appState;
    const appService = jasmine.createSpyObj('appService', [
        'getRandomTerms',
        'checkMaxValueBySettingName',
        'checkMinValueBySettingName'
    ])
    let effects: AppEffects;
    let actions: Observable<any>;
    let store: MockStore<AppState>;
    let testScheduler;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers: [
                AppEffects,
                provideMockStore({initialState}),
                provideMockActions(()=> actions),
                { provide: AppService, useValue: appService }
            ]
        });

        effects = TestBed.inject(AppEffects);
        store = TestBed.inject(MockStore);
        store.setState(initialState);

        testScheduler = new TestScheduler((actual, expected)=>{
            expect(actual).toEqual(expected);
        })
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    describe('createRandomTerms$',()=>{
        it('should handle createRandomTerms and return createRandomTermsSuccess action', () => {
            const randomTerms = ['Term1', 'Term2']
            const action = createRandomTerms();
            const outcome = createRandomTermsSuccess({randomTerms});

            testScheduler.run(({hot, cold, expectObservable})=> {
                actions = hot('-a', {a: action})
                const response = cold('-b|',{b: randomTerms});
                appService.getRandomTerms.and.returnValue(response);
                expectObservable(effects.createRandomTerms$).toBe('--b', {b: outcome})
            });
        });
    })

    describe('incrementSetting$',()=>{
        it('should handle incrementSettings and return incrementSettingsSuccess action', () => {
            const setting = 'termsPerCategory';
            const action = incrementSettings({settingName: setting});
            const outcome = incrementSettingsSuccess({settingName: setting});

            testScheduler.run(({hot, cold, expectObservable})=> {
                actions = hot('-a', {a: action})
                const response = cold('-b|',{b: setting});
                appService.checkMaxValueBySettingName.and.returnValue(response);
                expectObservable(effects.incrementSetting$).toBe('--b', {b: outcome})
            });
        });
    });

    describe('decrementSetting$',()=>{
        it('should handle decrementSettings and return decrementSettingsSuccess action', () => {
            const setting = 'termsPerCategory';
            const action = decrementSettings({settingName: setting});
            const outcome = decrementSettingsSuccess({settingName: setting});

            testScheduler.run(({hot, cold, expectObservable})=> {
                actions = hot('-a', {a: action})
                const response = cold('-b|',{b: setting});
                appService.checkMinValueBySettingName.and.returnValue(response);
                expectObservable(effects.decrementSetting$).toBe('--b', {b: outcome})
            });
        });
    })
});
