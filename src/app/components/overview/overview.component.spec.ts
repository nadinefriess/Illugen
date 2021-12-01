import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { OverviewComponent } from './overview.component';
import { appState } from '../../../assets/initial-state';
import { AppState } from 'src/app/state/state';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async(() => {
    const initialState = {app: appState};
    let store: MockStore<AppState>;
  
    TestBed.configureTestingModule({
      declarations: [ OverviewComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
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
    expect(toolbar).toBeDefined();
    expect(title.innerText).toEqual('Übersicht');
    expect(back.textContent).toEqual('arrow_back_ios');
    expect(add.textContent).toEqual('add');
  });

  describe('accordions', () => {
    it(`should render two parent accordions with corresponding titles`, () => {
      const parentAccordions = fixture.nativeElement.querySelectorAll('.data-lists')
      const item1 = fixture.nativeElement.querySelector('.categories')
      const item2 = fixture.nativeElement.querySelector('.topics')
      expect(parentAccordions.length).toBe(2);
      expect(item1.textContent).toEqual('Kategorien');
      expect(item2.textContent).toEqual('Themen');
    });

    it(`should render corresponding sub accordion titles in expanded parent accordions`, () => {
      const parentAccordions = fixture.nativeElement.querySelector('.data-lists');
      parentAccordions.click(); // opens all parent accordions
      const categoryTitle = fixture.nativeElement.querySelectorAll('.category-title');
      expect(categoryTitle.length).toEqual(7);
      expect(categoryTitle[0].innerText).toBe('Körper')
      expect(categoryTitle[1].innerText).toBe('Formen')
      expect(categoryTitle[2].innerText).toBe('Farben')
      expect(categoryTitle[3].innerText).toBe('Maltechnik')
      expect(categoryTitle[4].innerText).toBe('Material')
      expect(categoryTitle[5].innerText).toBe('Emotionen')
      expect(categoryTitle[6].innerText).toBe('Muster')
      
      const topicTitle = fixture.nativeElement.querySelectorAll('.topic-title');
      expect(topicTitle.length).toEqual(6);
      expect(topicTitle[0].innerText).toBe('Haustiere')
      expect(topicTitle[1].innerText).toBe('Meerestiere')
      expect(topicTitle[2].innerText).toBe('Fantasiewesen')
      expect(topicTitle[3].innerText).toBe('Pflanzen')
      expect(topicTitle[4].innerText).toBe('Kleidung')
      expect(topicTitle[5].innerText).toBe('Transportmittel')
    });

    it(`should render all (53) corresponding terms in the sub accordions `, () => {
      const parentAccordions = fixture.nativeElement.querySelector('.data-lists');
      parentAccordions.click(); // opens all parent accordions
      const subAccordions = fixture.nativeElement.querySelector('.category-list');
      subAccordions.click(); // opens first sub accordion
      const terms = fixture.nativeElement.querySelectorAll('.category-term');      
      expect(terms.length).toEqual(53);
      expect(terms[0].innerText).toEqual('Kegel');
    });
  });
});
