import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  todosService = inject(TodosService);

  totalTodos = this.todosService.totalTodos;
  completedTodos = this.todosService.completedTodos;
  incompleteTodos = this.todosService.uncompletedTodos;
}
