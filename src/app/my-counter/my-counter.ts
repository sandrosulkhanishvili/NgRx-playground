import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'ngrx-my-counter',
  imports: [AsyncPipe],
  standalone: true,
  template: `
    <button id="increment" (click)="increment()">Increment</button>
    <div>Current Count: {{ count$ | async }}</div>
    <button id="decrement" (click)="decrement()">Decrement</button>
    <button id="reset" (click)="reset()">Reset Counter</button>
  `,
})
export class MyCounter {
  private store: Store<{ count: number }> = inject(Store);
  count$: Observable<number> = this.store.select('count');

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
