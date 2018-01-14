import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-app',
  template: `
    <h3>My Todo List</h3>

    <div class="row">
      <div class="col-xs-6">

        <app-create-item (newItem)="createItem($event)"></app-create-item>

        <app-todo-list [list]="todos$ | async"
                       (completed)="setItemCompleted($event)"
                       (removed)="deleteItem($event)">
        </app-todo-list>

      </div>
      <div class="col-xs-6">

        <router-outlet></router-outlet>

      </div>
    </div>
  `,
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  todos$;

  constructor(
    private todosService: TodosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.todos$ = this.todosService.getList();
  }

  createItem(title) {
    this.todosService.addItem(title)
      .subscribe();
  }

  setItemCompleted({ item, completed }) {
    this.todosService.updateItem(item.id, { completed })
      .subscribe();
  }

  deleteItem(item) {
    this.todosService.deleteItem(item.id)
      .subscribe((res) => {
        if (this.activatedRoute.snapshot.children[0].params['id'] === item.id) {
          this.router.navigate(['./']);
        }
      });
  }

}
