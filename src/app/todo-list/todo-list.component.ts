import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul class="list-unstyled todo-list">
      <li *ngFor="let item of list">
        <app-list-item [item]="item"
                       (selected)="selectItem(item)"
                       [ngClass]="{selected: selectedItem === item}">
        </app-list-item>
      </li>
    </ul>
  `,
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list;
  @Output() selected = new EventEmitter();
  selectedItem;

  constructor() {
  }
  ngOnInit() {
  }

  selectItem(item) {
    this.selectedItem = item;
    this.selected.emit(item);
  }

}
