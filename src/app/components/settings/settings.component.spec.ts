import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { SettingsComponent } from './settings.component';
import { AppService } from 'src/app/services/app.service';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  
  beforeEach(async(() => {
    let store: MockStore;
    const spy = jasmine.createSpyObj('AppService', ['getSmallestLengthOfLists','getNumberOfTopics','getSettingByName','getNumberOfTopics']);
    const initialState = {}

    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      providers: [
        provideMockStore({ initialState }),
        {provide: AppService, useValue: spy}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
