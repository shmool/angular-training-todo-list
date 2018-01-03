import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngIf="item; else noItemSelected">
      <h3>{{ item.title }}</h3>
      <h4>id: {{ item.id }}</h4>
      <h4>completed: {{ item.completed || 'false' }}</h4>
    </div>

    <ng-template #noItemSelected>
      <h3>Please select an item to display</h3>
    </ng-template>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item;

  constructor() {
  }

  ngOnInit() {
  }

}
