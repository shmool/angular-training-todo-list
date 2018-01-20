import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: `
    <div class="inline-form todo-list-item" routerLinkActive="selected">
      <div class="todo-list-item-content"
           (mouseover)="showTooltip = true"
           (mouseout)="showTooltip = false">
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
        <app-tooltip *ngIf="showTooltip">
          <div #tooltipContent>{{ item.description }}</div>
        </app-tooltip>
    </div>
  `,
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item;
  @Output() completed = new EventEmitter();
  @Output() remove = new EventEmitter();
  showTooltip = false;

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
