import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-item-reactive-fb',
  template: `
    <h3>Reactive Form With form Builder</h3>

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
      <button class="btn btn-danger" type="button" (click)="cancel.emit(true)">Cancel</button>

    </form>
  `,
  styleUrls: ['./edit-item-reactive-fb.component.scss']
})
export class EditItemReactiveFbComponent implements OnInit {
  @Input()
  set item(value) {
    this.createForm(value);
  }

  @Output() submitForm = new EventEmitter();
  @Output() cancel = new EventEmitter();
  todoForm;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  createForm(item) {
    this.todoForm = this.fb.group({
      title: [item.title, Validators.required],
      description: [item.description],
      dueDate: [item.dueDate],
    });
  }

  onSubmit() {
    this.submitForm.emit(this.todoForm.value);
  }

}
