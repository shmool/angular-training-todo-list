import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul class="list-unstyled todo-list">
      <li *ngFor="let item of list">
        <app-list-item [item]="item"
                       (selected)="selectItem(item)"
                       (completed)="setItemCompleted(item, $event)"
                       (remove)="removeItem(item)"
                       [ngClass]="{selected: selectedItemId === item.id}">
        </app-list-item>
      </li>
    </ul>
  `,
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list;
  @Input() selectedItemId;
  @Output() selected = new EventEmitter();
  @Output() completed = new EventEmitter();
  @Output() removed = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  selectItem(item) {
    this.selected.emit(item);
  }

  setItemCompleted(item, completed) {
    this.completed.emit({ item, completed });
  }

  removeItem(item) {
    this.removed.emit(item);
  }

}
