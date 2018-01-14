import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-item-details',
  template: `
    <div *ngIf="item$ | async as item">
      <h3>{{ item.title }}</h3>
      <h4>id: {{ item.id }}</h4>
      <h4>completed: {{ item.completed || 'false' }}</h4>
    </div>
  `,
  styleUrls: ['./todo-item-details.component.scss']
})
export class TodoItemDetailsComponent implements OnInit {
  item$;

  constructor(private activatedRoute: ActivatedRoute, private todosService: TodosService) {
  }

  ngOnInit() {
    this.item$ = this.activatedRoute.params
      .pipe(switchMap(param => {
        return this.todosService.getItem(param['id']);
      }));
  }

}
