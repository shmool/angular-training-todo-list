import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { NoItemSelectedComponent } from './no-item-selected/no-item-selected.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoItemDetailsComponent } from './todo-item-details/todo-item-details.component';

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
