import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { TutorialState } from '../store/state/tutorial.state';

import { ReadComponent } from './read.component';

describe('ReadComponent', () => {
  let component: ReadComponent;
  let fixture: ComponentFixture<ReadComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadComponent ],
      imports: [NgxsModule.forRoot([TutorialState])]
    })
    .compileComponents();
    store = TestBed.inject(Store);
    store.reset({
      ...store.snapshot(),
      tutorials: {
        items: [{name: 'test', url: 'test'}]
      }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get tutorials', () => {
    expect(store.selectSnapshot(state => state.tutorials.items.length)).toEqual(1);
  });

  it('should update store on delete tutorial', () => {
    component.delTutorial('test');
    expect(store.selectSnapshot(state => state.tutorials.items.length)).toEqual(0);
  });

});
