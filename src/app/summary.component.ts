import { Component, ViewChild, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from './todos.service';
import party from 'party-js';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex flex-row gap-2 border border-black bg-gray-100 shadow-md text-center py-4 px-4 rounded-md"
    >
      <div class="flex flex-col flex-1">
        <div class="font-semibold text-xl">Total</div>
        <div class="font-sm">
          {{ totalTodos() }}
        </div>
      </div>
      <div class="flex flex-col flex-1 text-green-600">
        <div class="font-semibold text-xl">Completed</div>
        <div class="">
          {{ completedTodos() }}
        </div>
      </div>
      <div class="flex flex-col flex-1 text-red-500">
        <div class="font-semibold text-xl">Incomplete</div>
        <div class="">
          {{ incompleteTodos() }}
        </div>
      </div>
    </div>
  `,
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
