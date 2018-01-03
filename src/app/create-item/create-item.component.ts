import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-item',
  template: `
    <div class="form-inline">
      <div class="form-group">
        <input class="form-control"
               placeholder="new todo item"
               #newTodoInput
               (keyup.enter)="foo(newTodoInput, $event)">
        <button class="btn btn-success" (click)="foo(newTodoInput, $event)">Add</button>
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

  foo(input, e) {
    console.log(e, this)
    this.newItem.emit(input.value);
    input.value = '';
  }

}
