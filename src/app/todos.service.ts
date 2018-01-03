import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {
  todos = [
    { id: 0, title: 'add Bootstrap', completed: true },
    { id: 1, title: 'create service', completed: true },
    { id: 3, title: 'create components' },
    { id: 4, title: 'use Input()' },
    { id: 5, title: 'use *ngFor' }
  ];

  constructor() {
  }

  addItem(title) {
    const newItem = {
      title,
      id: this.todos.length + 1
    };

    // this.todos.push(newItem);
    return this.todos = [...this.todos, newItem ];
  }

}
