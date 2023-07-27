import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodosService } from './todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex flex-row py-4">
      <input
        name="todo"
        [(ngModel)]="todo"
        class="flex-1 border-black border rounded-md rounded-r-none border-r-0 px-2 py-1"
      />
      <button
        (click)="addTodo()"
        class="w-auto px-2 py-1 bg-blue-500 border border-l-0 border-black rounded-md rounded-l-none font-semibold text-white hover:bg-blue-600 transition duration-200 ease-in-out cursor-pointer"
      >
        Add Todo
      </button>
    </div>
  `,
})
export class AddComponent {
  todo = '';

  todoService = inject(TodosService);
  router = inject(Router);

  addTodo() {
    console.log(this.todo);
    this.todoService.addTodos(this.todo);
    this.router.navigate(['/']);
  }
}
