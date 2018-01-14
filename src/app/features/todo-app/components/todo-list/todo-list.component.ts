import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul class="list-unstyled todo-list">
      <li *ngFor="let item of list">
        <app-list-item [item]="item"
                       (completed)="setItemCompleted(item, $event)"
                       (remove)="removeItem(item)">
        </app-list-item>
      </li>
    </ul>
  `,
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list;
  @Output() completed = new EventEmitter();
  @Output() removed = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  setItemCompleted(item, completed) {
    this.completed.emit({ item, completed });
  }

  removeItem(item) {
    this.removed.emit(item);
  }

}
