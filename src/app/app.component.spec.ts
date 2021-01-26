import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture, component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
     fixture = TestBed.createComponent(AppComponent);
     component = fixture.componentInstance;
  });


  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'illugen'`, () => {
    expect(component.title).toEqual('Illugen');
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