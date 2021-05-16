import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { SettingsComponent } from './settings.component';
import { AppService } from 'src/app/services/service';
import { appState } from '../../../assets/initial-state';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let appServiceSpy: jasmine.SpyObj<AppService>;
  let mockStore: MockStore;
  let mockStoreSpy: jasmine.SpyObj<MockStore>;
  
  beforeEach(async(() => {
    const initialState = {app: appState};

    let spy = jasmine.createSpyObj(
      'AppService',
        [
          'returnRendomIndexFromTermList',
          'collectRandomTerms',
          'checkSmallestLength',
          'getRandomTerms',
          'getSmallestLengthOfLists',
          'getSettingValueByName',
          'getNumberOfTopics'
        ],[
          'categoryList$',
          'topicList$',
          'settings$'
        ]
      );
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      providers: [
        provideMockStore({ initialState }),
        {provide: AppService, useValue: spy}
      ]})
    .compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    appServiceSpy = TestBed.inject(AppService) as jasmine.SpyObj<AppService>;
    mockStoreSpy = TestBed.inject(MockStore) as jasmine.SpyObj<MockStore>;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render a toolbar with settings title and back icon`, () => {
    const toolbar = fixture.nativeElement.querySelector('.toolbar')
    const title = fixture.nativeElement.querySelector('.title')
    const back = fixture.nativeElement.querySelector('.back')
    expect(toolbar).toBeDefined();
    expect(title.innerText).toEqual('Einstellungen');
    expect(back.textContent).toEqual('arrow_back_ios');
  });

  it(`should render a hint text`, () => {
    const hint = fixture.nativeElement.querySelector('.hint')
    expect(hint).toBeDefined();
  });

  it(`should render setting label with corresponding max value`, () => {
    const settingLabels = fixture.nativeElement.querySelectorAll('.setting-label');
    expect(settingLabels.length).toBe(4);
    expect(settingLabels[0].innerText).toEqual('Begriffe pro Kategorie (max.: 7)');
    expect(settingLabels[1].innerText).toEqual('Begriffe pro Thema (max.: 8)');
    expect(settingLabels[2].innerText).toEqual('Anzahl der Kategorien (max.: 6)');
    expect(settingLabels[3].innerText).toEqual('Anzahl der Themen (max.: 6)');
  });

  it(`should render counter with corresponding setting value`, () => {
    const counter1 = fixture.nativeElement.querySelector('.counter-max-category-terms');
    const counter2 = fixture.nativeElement.querySelector('.counter-max-topic-terms');
    const counter3 = fixture.nativeElement.querySelector('.counter-max-topics');
    expect(counter1.innerText).toBe('1')
    expect(counter2.innerText).toBe('1')
    expect(counter3.innerText).toBe('1')
  });
  
  it('should call function on counter button click', () => {
    let incrementSpy = spyOn(component, 'increment').and.callThrough();
    let decrementSpy = spyOn(component, 'decrement').and.callThrough();
    const counterIncrementButtons = fixture.nativeElement.querySelectorAll('.increment');
    const counterDecrementButtons = fixture.nativeElement.querySelectorAll('.decrement');
    counterIncrementButtons[0].click();
    counterIncrementButtons[1].click();
    counterIncrementButtons[2].click();
    counterDecrementButtons[0].click();
    counterDecrementButtons[1].click();
    counterDecrementButtons[2].click();
    expect(incrementSpy).toHaveBeenCalledTimes(3);
    expect(decrementSpy).toHaveBeenCalledTimes(3);
  });
});
