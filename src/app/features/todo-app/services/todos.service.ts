import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

export interface TodoItem {
  id?: string;
  title: string;
  completed?: boolean;
}

@Injectable()
export class TodosService {

  constructor(private http: HttpClient) {
  }

  getList() {
    return this.http.get<{ string: TodoItem }>(`${environment.url}.json`).pipe(
      map(res => {
        return res ? Object.keys(res).map(id => ({ id, ...res[id] })) : null;
      })
    );
  }

  addItem(title) {
    const newItem = {
      title,
      completed: false
    };

    return this.http.post(`${environment.url}.json`, newItem);
  }

  updateItem(id, changes) {
    return this.http.patch(`${environment.url}/${id}.json`, changes);
  }

  getItem(id) {
    return this.http.get<TodoItem>(`${environment.url}/${id}.json`).pipe(
      map(res => res ? ({ id, ...res }) : null)
    );
  }

  deleteItem(id) {
    return this.http.delete(`${environment.url}/${id}.json`);
  }

}
