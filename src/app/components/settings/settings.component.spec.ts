import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { AppService } from 'src/app/services/app.service';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('AppService', ['getSmallestLengthOfLists','getNumberOfTopics']);

    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      providers: [{provide: AppService, useValue: spy}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
