import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AppService } from 'src/app/services/service';
import { cold, getTestScheduler } from 'jasmine-marbles';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let appServiceSpy: jasmine.SpyObj<AppService>;
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

  beforeEach(async(() => {  
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: AppService, useValue: spy}],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    appServiceSpy = TestBed.inject(AppService) as jasmine.SpyObj<AppService>;
    fixture.detectChanges(); 
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render a toolbar with app title, overview and settings icon`, () => {
    const toolbar = fixture.nativeElement.querySelector('.toolbar')
    const title = fixture.nativeElement.querySelector('.title')
    const overview = fixture.nativeElement.querySelector('.overview')
    const settings = fixture.nativeElement.querySelector('.settings')
    expect(toolbar).toBeDefined();
    expect(title.innerText).toEqual('Illugen');
    expect(overview.textContent).toEqual('remove_red_eye');
    expect(settings.textContent).toEqual('settings');
  });

  it(`should render a hint`, () => {
    const hint = fixture.nativeElement.querySelector('.hint')
    expect(hint.textContent).toEqual('Generiere zufällige Begriffe für eine Illustration indem du auf start drückst. Drücke so oft Start bis dir bei der Betrachtung der Begriffe eine Idee für deine Illustration in den Sinn kommt.');
  });

  it('should render generate button', () => {
    const button = fixture.nativeElement.querySelector('.generate')
    fixture.detectChanges();
    expect(button.textContent).toContain('start');
  });

  it('should call function on button click', () => {
    const button = fixture.nativeElement.querySelector('.generate')
    spyOn(component, 'onGenerateClick');
    button.click();
    fixture.detectChanges(); 
    expect(component.onGenerateClick).toHaveBeenCalled();
  });
  
  it('should render list with terms',  () =>  {
    appServiceSpy.getRandomTerms.and.returnValue(cold('a',{a:['Kreis','Blau','Hund']}))
    component.onGenerateClick();
    fixture.detectChanges(); 
    getTestScheduler().flush(); // flush the observables
    fixture.detectChanges(); 
    const list = fixture.nativeElement.querySelectorAll('.term');
    expect(list.length).toBe(3);
    expect(list[0].innerText).toBe('Kreis');
    expect(list[1].innerText).toBe('Blau');
    expect(list[2].innerText).toBe('Hund');
  });
})