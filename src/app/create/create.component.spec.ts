import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { TutorialState } from '../store/state/tutorial.state';

import { CreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponent ],
      imports: [NgxsModule.forRoot([TutorialState])]
    })
    .compileComponents();

    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update store on add tutorial', () => {
    component.addTutorial('test', 'test');
    expect(store.selectSnapshot(state => state.tutorials.items[0].name)).toEqual('test');
  });

});
