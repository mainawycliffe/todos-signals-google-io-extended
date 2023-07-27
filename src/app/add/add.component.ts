import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
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
