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
         (click)="selectItem()"
         [ngClass]="{completed: item.completed}">
        {{ item.title }}
      </a>
      <div class="delete-icon glyphicon glyphicon-remove"
           (click)="removeItem()"></div>
    </div>
  `,
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item;
  @Output() selected = new EventEmitter();
  @Output() completed = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggleCompleted(e) {
    this.completed.emit(e.target.checked);
  }

  selectItem() {
    this.selected.emit(this.item);
  }

  removeItem() {
    this.remove.emit(this.item);
  }

}
