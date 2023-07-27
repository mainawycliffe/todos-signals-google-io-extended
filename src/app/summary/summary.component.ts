import { Component, ViewChild, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '../todos.service';
import party from 'party-js';

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

  confetti = effect(() => {
    if (this.incompleteTodos() === 0) {
      // show confetti if all todos are completed
      party.confetti(document.getElementsByTagName('body')[0], {
        speed: 1000,
        count: 100000,
      });
    }
  });
}
