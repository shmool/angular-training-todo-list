import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-item',
  template: `
    <form #f="ngForm" (ngSubmit)="onSubmit(f)">

      <div id="todo-details-group">
        <div class="form-group">
          <label>Title:
            <input class="form-control" name="title" [ngModel]="item.title" required>
          </label>
        </div>
        <div class="form-group">
          <label>Description:
            <textarea class="form-control" name="description" [ngModel]="item.description"></textarea>
          </label>
        </div>
      </div>

      <div class="form-group">
        <label>Due Date:
          <input type="date" class="form-control" name="dueDate" [ngModel]="item.dueDate">
        </label>
      </div>

      <button class="btn btn-success" [disabled]="!f.valid">Submit</button>
      <button class="btn btn-warning" type="reset">Reset</button>
    </form>
  `,
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  @Input() item;
  @Output() submitForm = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this.submitForm.emit(form.value);
  }

}
