import { Component, signal } from '@angular/core';
import { MyCounter } from './my-counter/my-counter';

@Component({
  selector: 'app-root',
  imports: [MyCounter],
  standalone: true,
  template: `
    <h1>NgRx Tutorial</h1>

    <!-- 👇 add the counter component -->
    <ngrx-my-counter></ngrx-my-counter>
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('NgRx-playground');
}
