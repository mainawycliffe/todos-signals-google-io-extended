import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

const defaultTodos = [
  {
    id: Math.random().toString(),
    todo: 'Learn Svelte',
    completed: false,
  },
  {
    id: Math.random().toString(),
    todo: 'Learn Angular',
    completed: false,
  },
  {
    id: Math.random().toString(),
    todo: 'Learn React',
    completed: true,
  },
];

type Todos = {
  id: string;
  todo: string;
  completed: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos = signal<Todos[]>(
    localStorage.getItem('todos')
      ? // we can use the non-null assertion operator here because we know that it's not null
        JSON.parse(localStorage.getItem('todos')!)
      : defaultTodos
  );

  // a computed signal that returns the total number of todos
  totalTodos = computed(() => this.todos().length);

  // a computed signal that returns the number of completed todos
  completedTodos = computed(
    () => this.todos().filter((todo) => todo.completed).length
  );

  // a computed signal that returns the number of uncompleted todos
  uncompletedTodos = computed(
    () => this.todos().filter((todo) => !todo.completed).length
  );

  titleService = inject(Title);

  constructor() {
    effect(() => {
      this.titleService.setTitle(`Todos App (${this.uncompletedTodos()})`);
    });

    // persist todos to localStorage
    effect(() => {
      const todosJSON = JSON.stringify(this.todos());
      localStorage.setItem('todos', todosJSON);
    });
  }

  getTodos() {
    return this.todos;
  }

  addTodos(todo: string) {
    const newTodo = {
      id: Date.now().toString(),
      todo,
      completed: false,
    };

    this.todos.update((prev) => [...prev, newTodo]);
  }

  deleteTodos(id: string) {
    this.todos.update((prev) => prev.filter((todo) => todo.id !== id));
  }

  toggleTodos(id: string) {
    this.todos.update((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      })
    );
  }
}
