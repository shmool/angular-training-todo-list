import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TodoItemDetailsComponent } from './todo-item-details/todo-item-details.component';
import { TodosService } from './todos.service';
import { HttpClientModule } from '@angular/common/http';
import { NoItemSelectedComponent } from './no-item-selected/no-item-selected.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    CreateItemComponent,
    TodoListComponent,
    ListItemComponent,
    TodoItemDetailsComponent,
    NoItemSelectedComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
