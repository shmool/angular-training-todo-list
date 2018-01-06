import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: `
    <div class="inline-form todo-list-item">
      <input type="checkbox"
             [checked]="item.completed"
             (change)="toggleCompleted($event)">
      <a href="#"
         class="todo-list-item-title"
         (click)="selectItem(item)"
         [ngClass]="{completed: item.completed}">
        {{ item.title }}
      </a>
    </div>
  `,
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item;
  @Output() selected = new EventEmitter();
  @Output() completed = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggleCompleted(e) {
    this.completed.emit(e.target.checked);
  }

  selectItem(item) {
    this.selected.emit(item);
  }

}
