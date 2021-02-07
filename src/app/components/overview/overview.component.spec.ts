import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { OverviewComponent } from './overview.component';
import { AppService } from 'src/app/services/app.service';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async(() => {
    let store: MockStore;
    const spy = jasmine.createSpyObj('AppService', ['getSmallestLengthOfLists','getNumberOfTopics','getSettingByName','getNumberOfTopics']);
    const initialState = {app:{}};
    TestBed.configureTestingModule({
      declarations: [ OverviewComponent ],
      providers: [
        provideMockStore({ initialState }),
        {provide: AppService, useValue: spy}]
    })
    .compileComponents();
  
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render a toolbar with app title, back and add icon`, () => {
    const toolbar = fixture.nativeElement.querySelector('.toolbar')
    const title = fixture.nativeElement.querySelector('.title')
    const back = fixture.nativeElement.querySelector('.back')
    const add = fixture.nativeElement.querySelector('.add')
    fixture.detectChanges();
    expect(toolbar).toBeDefined();
    expect(title.innerText).toEqual('Übersicht');
    expect(back.textContent).toEqual('arrow_back_ios');
    expect(add.textContent).toEqual('add');
  });

  it(`should render an accordion with two items`, () => {
    const accordion = fixture.nativeElement.querySelector('.data-list')
    expect(accordion).toBeDefined();
  });
});
