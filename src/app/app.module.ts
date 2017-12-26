import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosService } from './todos.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    CreateItemComponent,
    TodoListComponent,
    ListItemComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
