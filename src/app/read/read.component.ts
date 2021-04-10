import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { RemoveTutorial } from '../store/actions/tutorial/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials$: Observable<Tutorial[]>;

  constructor(private store: Store) {
      this.tutorials$ = this.store.select(state => state.tutorials.items);
  }

  delTutorial = (name: string) => {
    this.store.dispatch(new RemoveTutorial(name));
  }

  ngOnInit(): void {}

}
