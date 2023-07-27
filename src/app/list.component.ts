import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from './todos.service';
import { RouterModule } from '@angular/router';
import { SummaryComponent } from './summary.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, SummaryComponent],
  template: `
    <div class="flex flex-col gap-2 py-4">
      <div class="flex flex-col py-2">
        <a
          routerLink="/add"
          class="w-full border-black bg-blue-500 shadow-sm font-semibold text-white text-center py-4 px-4 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out cursor-pointer"
        >
          Add Todo
        </a>
      </div>
      <app-summary></app-summary>
      <div
        role="button"
        (click)="toggleTodos(todo.id)"
        class="flex flex-row px-2 py-4 bg-blue-200 border-gray-700 rounded-md cursor-pointer hover:bg-blue-300 transition duration-200 ease-in-out"
        *ngFor="let todo of todos()"
      >
        <div class="flex-1">
          {{ todo.todo }}
        </div>
        <div class="w-auto px-4">
          {{ todo.completed ? '✅' : '❌' }}
        </div>
      </div>
    </div>
  `,
})
export class ListComponent {
  todosService = inject(TodosService);
  todos = this.todosService.todos;

  toggleTodos = this.todosService.toggleTodos;
}
