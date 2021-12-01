import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { appState } from 'src/assets/initial-state';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { createRandomTerms } from 'src/app/state/actions';
import { AppState } from 'src/app/state/state';
import { selectRendomTerms } from 'src/app/state/selectors';
import { By } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

describe('HomeComponent', () => {
  const initialState = {app: appState};
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore<AppState>;

  beforeEach(async(() => {  
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        provideMockStore({ initialState })
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
    spyOn(store, 'dispatch').and.callFake(()=>{});
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
  
  describe('selectors',()=>{
    let mockRendomTermsSelector;
    
    beforeEach(()=>{
      mockRendomTermsSelector = store.overrideSelector(selectRendomTerms, 
        ['Term1','Term2']);
      fixture.detectChanges();
      store.refreshState()
    });

    it('should render list with random terms',  () =>  {
      // Two terms are expected, because this is predefined in the Illugen settings.
      component.rendomTerms$ = of(['Blau','Hund']); 
      fixture.detectChanges(); 
      const list = fixture.nativeElement.querySelectorAll('.term');
      expect(list.length).toBe(2);
      expect(list[0].innerText).toBe('Blau');
      expect(list[1].innerText).toBe('Hund');
    });
  });

  it('should dispatch createRandomTerms', ()=>{
    component.onGenerateClick();
    expect(store.dispatch).toHaveBeenCalledWith(
      createRandomTerms()
    );
  });
})