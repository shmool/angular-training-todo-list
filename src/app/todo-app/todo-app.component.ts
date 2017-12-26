import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-app',
  template: `
    <h3>My Todo List</h3>

    <div class="row">
      <div class="col-xs-6">

        <app-create-item (newItem)="createItem($event)"></app-create-item>

        <app-todo-list [list]="todos" (selected)="selectItem($event)"></app-todo-list>

      </div>
      <div class="col-xs-6">

        <app-todo-item [item]="displayedItem"></app-todo-item>

      </div>
    </div>
  `,
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  todos;
  displayedItem;

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.todos = this.todosService.todos;
  }

  selectItem(item) {
    this.displayedItem = item;
  }

  createItem(title) {
    this.todosService.addItem(title);
  }

}
