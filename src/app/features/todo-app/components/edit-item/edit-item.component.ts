import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  template: `
    <form [formGroup]="todoForm" (ngSubmit)="onSubmit()">

      <div id="todo-details-group">
        <div class="form-group">
          <label>Title:
            <input class="form-control" formControlName="title">
          </label>
        </div>
        <div class="form-group">
          <label>Description:
            <textarea class="form-control" formControlName="description"></textarea>
          </label>
        </div>
      </div>

      <div class="form-group">
        <label>Due Date:
          <input type="date" class="form-control" formControlName="dueDate">
        </label>
      </div>

      <button class="btn btn-success" [disabled]="!todoForm.valid">Submit</button>
      <button class="btn btn-warning" type="reset">Reset</button>
    </form>
  `,
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  @Input()
  set item(value) {
    this.createForm(value);
  };

  @Output() submitForm = new EventEmitter();
  todoForm;

  constructor() {
  }

  ngOnInit() {
  }

  createForm(item) {
    this.todoForm = new FormGroup({
      title: new FormControl(item.title, Validators.required),
      description: new FormControl(item.description),
      dueDate: new FormControl(item.dueDate),
    });
  }

  onSubmit() {
    this.submitForm.emit(this.todoForm.value);
  }

}
