import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-app',
  template: `
    <h3>My Todo List</h3>

    <div class="row">
      <div class="col-xs-6">

        <app-create-item (newItem)="createItem($event)"></app-create-item>

        <app-todo-list [list]="todos"
                       [selectedItemId]="displayedItem?.id"
                       (selected)="selectItem($event.id)"
                       (completed)="setItemCompleted($event)"
                       (removed)="deleteItem($event)">
        </app-todo-list>

      </div>
      <div class="col-xs-6">

        <app-todo-item-details [item]="displayedItem"></app-todo-item-details>

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

  getList() {
    this.todosService.getList()
      .subscribe(
        list => this.todos = list,
        err => console.log('error fetching todo list', err));
  }

  ngOnInit() {
    this.getList();
  }

  selectItem(id) {
    this.todosService.getItem(id)
      .subscribe(
        item => this.displayedItem = item,
        err => console.log('error fetching item', err));
  }

  createItem(title) {
    this.todosService.addItem(title)
      .subscribe((res) => {
        this.getList();
      });
  }

  setItemCompleted({ item, completed }) {
    this.todosService.updateItem(item.id, { completed })
      .subscribe((res) => {
        this.getList();
        this.updateDisplayedItem(item.id);
      });
  }

  deleteItem(item) {
    this.todosService.deleteItem(item.id)
      .subscribe((res) => {
        this.getList();
        this.updateDisplayedItem(item.id);
      });
  }

  updateDisplayedItem(id) {
    if (this.displayedItem && this.displayedItem.id === id) {
      this.selectItem(id);
    }
  }

}
