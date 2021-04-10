import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { TutorialState } from './store/state/tutorial.state';

describe('AppComponent', () => {
  beforeEach(async () => {
    let store: Store;
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([TutorialState])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    store = TestBed.inject(Store);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have Create component`, () => {
    const fixture = TestBed.createComponent(CreateComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it(`should have as title 'ngxs'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('ngxs');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('ngxs app is running!');
  // });
});
