import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render a toolbar with app title, overview and settings icon`, () => {
    const toolbar = fixture.nativeElement.querySelector('.toolbar')
    const title = fixture.nativeElement.querySelector('.title')
    const overview = fixture.nativeElement.querySelector('.overview')
    const settings = fixture.nativeElement.querySelector('.settings')
    fixture.detectChanges();
    expect(toolbar).toBeDefined();
    expect(title.innerText).toEqual('Illugen');
    expect(overview.textContent).toEqual('remove_red_eye');
    expect(settings.textContent).toEqual('settings');
  });

  it(`should render a hint text`, () => {
    const hint = fixture.nativeElement.querySelector('.hint')
    expect(hint).toBeDefined();
  });

  it('should render generate button', () => {
    const button = fixture.nativeElement.querySelector('.generate')
    fixture.detectChanges();
    expect(button.textContent).toContain('start');
  });

  it('should call generate function ', async(() => {
    const button = fixture.nativeElement.querySelector('.generate')
    spyOn(component, 'onGenerateClick');
    button.click();
    fixture.detectChanges()
    expect(component.onGenerateClick).toHaveBeenCalled();
  }));

  it('should render list', ()=>{
    const button = fixture.nativeElement.querySelector('.generate');
    button.click();
    fixture.detectChanges();
    const list = fixture.nativeElement.querySelector('.resultList');
    expect(list).toBeDefined();
  });

})