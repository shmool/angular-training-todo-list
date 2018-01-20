import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-item',
  template: `
    <div>
      <a (click)="type = 'templateDriven'" [ngClass]="{active: type === 'templateDriven'}">Template Driven</a> |
      <a (click)="type = 'reactive'" [ngClass]="{active: type === 'reactive'}">Reactive</a> |
      <a (click)="type = 'FormBuilder'" [ngClass]="{active: type === 'FormBuilder'}">Form Builder</a>
    </div>

    <app-edit-item-template-driven [item]="item"
                                   (submitForm)="submitForm.emit($event)"
                                   (cancel)="cancel.emit($event)"
                                   *ngIf="type === 'templateDriven'">
    </app-edit-item-template-driven>

    <app-edit-item-reactive [item]="item"
                            (submitForm)="submitForm.emit($event)"
                            (cancel)="cancel.emit($event)"
                            *ngIf="type === 'reactive'">
    </app-edit-item-reactive>

    <app-edit-item-reactive-fb [item]="item"
                               (submitForm)="submitForm.emit($event)"
                               (cancel)="cancel.emit($event)"
                               *ngIf="type === 'FormBuilder'">
    </app-edit-item-reactive-fb>
  `,
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent {
  @Input() item;
  @Output() submitForm = new EventEmitter();
  @Output() cancel = new EventEmitter();
  type = 'templateDriven';
}
