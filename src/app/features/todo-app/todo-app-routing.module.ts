import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAppComponent } from './containers/todo-app/todo-app.component';
import { NoItemSelectedComponent } from './containers/no-item-selected/no-item-selected.component';
import { TodoItemDetailsComponent } from './containers/todo-item-details/todo-item-details.component';

const routes: Routes = [
  {
    path: 'todos',
    component: TodoAppComponent,
    children: [
      { path: '', component: NoItemSelectedComponent },
      { path: ':id', component: TodoItemDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoAppRoutingModule {
}
