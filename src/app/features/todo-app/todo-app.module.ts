import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoItemSelectedComponent } from './containers/no-item-selected/no-item-selected.component';
import { TodoItemDetailsComponent } from './containers/todo-item-details/todo-item-details.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { TodoMainComponent } from './containers/todo-main/todo-main.component';
import { TodoAppRoutingModule } from './todo-app-routing.module';
import { TodosService } from './services/todos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EditItemComponent } from './components/edit-item/edit-item.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoAppRoutingModule
  ],
  declarations: [
    TodoMainComponent,
    CreateItemComponent,
    TodoListComponent,
    ListItemComponent,
    TodoItemDetailsComponent,
    NoItemSelectedComponent,
    EditItemComponent,
  ],
  providers: [TodosService]
})
export class TodoAppModule {
}
