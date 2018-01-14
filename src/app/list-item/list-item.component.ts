import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: `
    <div class="inline-form todo-list-item" routerLinkActive="selected">
      <input type="checkbox"
             [checked]="item.completed"
             (change)="toggleCompleted($event)">
      <a [routerLink]="['./', item.id]"
         class="todo-list-item-title"
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
  @Output() completed = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggleCompleted(e) {
    this.completed.emit(e.target.checked);
  }

  removeItem() {
    this.remove.emit(this.item);
  }

}
