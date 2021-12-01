import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { SettingsComponent } from './settings.component';
import { appState } from '../../../assets/initial-state';
import { decrementSettings, incrementSettings } from 'src/app/state/actions';
import { AppState } from 'src/app/state/state';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let store: MockStore<AppState>

  beforeEach(async(() => {
    const initialState = {app: appState};

    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      providers: [
        provideMockStore({ initialState })
      ]})
    .compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    spyOn(store, 'dispatch').and.callFake(()=>{});
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
    const counter4 = fixture.nativeElement.querySelector('.counter-max-categories');
    expect(counter1.innerText).toBe('1')
    expect(counter2.innerText).toBe('1')
    expect(counter3.innerText).toBe('1')
    expect(counter4.innerText).toBe('1')
  });
  
  it('should call corresponding function on counter button click', () => {
    let incrementSpy = spyOn(component, 'increment').and.callThrough();
    let decrementSpy = spyOn(component, 'decrement').and.callThrough();
    const counterIncrementButtons = fixture.nativeElement.querySelectorAll('.increment');
    const counterDecrementButtons = fixture.nativeElement.querySelectorAll('.decrement');
    counterIncrementButtons[0].click();
    counterIncrementButtons[1].click();
    counterIncrementButtons[2].click();
    counterDecrementButtons[0].click();
    counterDecrementButtons[1].click();
    expect(incrementSpy).toHaveBeenCalledTimes(3);
    expect(decrementSpy).toHaveBeenCalledTimes(2);
  });

  it('settings should dispatch incrementSettings', ()=>{
    const setting = 'termsPerCategory';
    component.increment(setting);
    expect(store.dispatch).toHaveBeenCalledWith(
      incrementSettings({settingName:setting})
    );
  });

  it('settings should dispatch decrementSettings', ()=>{
    const setting = 'termsPerCategory';
    component.decrement(setting);
    expect(store.dispatch).toHaveBeenCalledWith(
      decrementSettings({settingName:setting})
    );
  });
});
