import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface TodoItem {
  id?: string;
  title: string;
  completed?: boolean;
}

@Injectable()
export class TodosService {
  list$ = new BehaviorSubject(null);
  item$ = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  getList() {
    return this.http.get<{ string: TodoItem }>(`${environment.url}.json`).pipe(
      map(res => res ? Object.keys(res).map(id => ({ id, ...res[id] })) : null),
      tap(res => this.list$.next(res)),
      switchMap(res => this.list$)
    );
  }

  addItem(title) {
    const newItem = {
      title,
      completed: false
    };

    return this.http.post(`${environment.url}.json`, newItem).pipe(
      switchMap(() => this.getList())
    );
  }

  updateItem(id, changes) {
    return this.http.patch(`${environment.url}/${id}.json`, changes).pipe(
      switchMap(() => this.getList()),
      switchMap(() => this.getItem(id))
    );
  }

  getItem(id) {
    return this.http.get<TodoItem>(`${environment.url}/${id}.json`).pipe(
      map(res => res ? ({ id, ...res }) : null),
      tap(res => this.item$.next(res)),
      switchMap(res => this.item$) // if the method caller uses the returned observable
    );
  }

  deleteItem(id) {
    return this.http.delete(`${environment.url}/${id}.json`).pipe(
      switchMap(() => this.getList())
    );
  }

}
