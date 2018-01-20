import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-item-reactive',
  template: `
    <h3>Reactive Form</h3>

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

      <div class="form-group" formArrayName="members">
        <label>Members:
          <div *ngIf="membersFormArray?.controls.length === 0"
               class="app-icon plus-icon glyphicon glyphicon-plus"
               (click)="addMember()"></div>

          <div class="form-group form-inline array-input show-icon-on-hover"
               *ngFor="let member of membersFormArray?.controls; let i = index; let last = last">
            <input class="form-control" [formControlName]="i">
            <div class="app-icon delete-icon glyphicon glyphicon-remove"
                 (click)="removeMember(i)"></div>
            <div *ngIf="last" class="app-icon plus-icon glyphicon glyphicon-plus"
                 (click)="addMember()"></div>

          </div>
        </label>
      </div>

      <button class="btn btn-success" [disabled]="!todoForm.valid">Submit</button>
      <button class="btn btn-warning" type="reset">Reset</button>
      <button class="btn btn-danger" type="button" (click)="cancel.emit(true)">Cancel</button>

    </form>
  `,
  styleUrls: ['./edit-item-reactive.component.scss']
})
export class EditItemReactiveComponent implements OnInit {
  @Input()
  set item(value) {
    this.createForm(value);
  }

  @Output() submitForm = new EventEmitter();
  @Output() cancel = new EventEmitter();
  todoForm;
  membersFormArray;

  constructor() {
  }

  ngOnInit() {
  }

  createForm(item) {
    this.membersFormArray = new FormArray(item.members ? item.members.map(member => new FormControl(member)) : []);

    this.todoForm = new FormGroup({
      title: new FormControl(item.title, Validators.required),
      description: new FormControl(item.description),
      dueDate: new FormControl(item.dueDate),
      members: this.membersFormArray
    });

  }

  onSubmit() {
    const formValue = { ...this.todoForm.value };
    formValue.members = [...formValue.members.filter(member => member !== null && member !== '')];
    this.submitForm.emit(formValue);
  }

  addMember() {
    this.membersFormArray.push(new FormControl());
  }

  removeMember(index) {
    this.membersFormArray.removeAt(index);
  }

}
