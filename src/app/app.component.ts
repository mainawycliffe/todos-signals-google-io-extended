import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <div class="flex flex-col h-screen w-screen">
      <div class="max-w-lg w-full mx-auto flex flex-col h-full">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'todos-signals-pwani';
}
