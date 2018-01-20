import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoItemSelectedComponent } from './containers/no-item-selected/no-item-selected.component';
import { TodoItemDetailsComponent } from './containers/todo-item-details/todo-item-details.component';
import { TodoMainComponent } from './containers/todo-main/todo-main.component';

const routes: Routes = [
  {
    path: '',
    component: TodoMainComponent,
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
