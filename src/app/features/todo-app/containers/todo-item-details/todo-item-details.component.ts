import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../../services/todos.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-item-details',
  template: `
    <div *ngIf="item$ | async as item">

      <app-edit-item *ngIf="edit; else displayItem" [item]="item"
                     (submitForm)="onSubmit(item.id, $event)"
                     (cancel)="edit = false"></app-edit-item>

      <ng-template #displayItem>
        <button class="btn btn-primary" (click)="edit = true">Edit</button>
        <h3>{{ item.title }}</h3>
        <h4>id: {{ item.id }}</h4>
        <h4>completed: {{ item.completed || 'false' }}</h4>
        <h4>description: {{ item.description }}</h4>
        <h4>due date: {{ item.dueDate | date: 'dd-MM-yyyy' }}</h4>
        <h4>Members:</h4>
        <ul>
          <li *ngFor="let member of item.members">{{ member }}</li>
        </ul>
      </ng-template>

    </div>
  `,
  styleUrls: ['./todo-item-details.component.scss']
})
export class TodoItemDetailsComponent implements OnInit {
  item$;
  edit;

  constructor(private activatedRoute: ActivatedRoute, private todosService: TodosService) {
  }

  ngOnInit() {
    this.item$ = this.activatedRoute.params
      .pipe(
        switchMap(param => this.todosService.getItem(param['id'])),
        tap(() => this.edit = false));
  }

  onSubmit(id, value) {
    this.todosService.updateItem(id, value)
      .subscribe(res => {
        this.edit = false;
      });
  }

}
