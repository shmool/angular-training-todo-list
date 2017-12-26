import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-item',
  template: `
    <div class="form-inline">
      <div class="form-group">
        <input class="form-control"
               placeholder="new todo item"
               #newTodoInput
               (keyup.enter)="onSubmit(newTodoInput)">
        <button class="btn btn-success" (click)="onSubmit(newTodoInput)">Add</button>
      </div>
    </div>
  `,
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  @Output() newItem = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(input) {
    this.newItem.emit(input.value);
    input.value = '';
  }

}
