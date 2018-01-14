import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAppComponent } from './features/todo-app/containers/todo-app/todo-app.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { NoItemSelectedComponent } from './features/todo-app/containers/no-item-selected/no-item-selected.component';
import { TodoItemDetailsComponent } from './features/todo-app/containers/todo-item-details/todo-item-details.component';

const routes: Routes = [
  {
    path: 'todos',
    component: TodoAppComponent,
    children: [
      { path: '', component: NoItemSelectedComponent },
      { path: ':id', component: TodoItemDetailsComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/todos' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
