import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '../todos.service';
import { RouterModule } from '@angular/router';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, SummaryComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  todosService = inject(TodosService);
  todos = this.todosService.todos;

  toggleTodos = this.todosService.toggleTodos;
}
