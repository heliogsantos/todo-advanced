import { ApiService } from '../api.service';
import { NewTask } from './new-task';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoListService {

  constructor(private http: HttpClient, private api: ApiService) { }

  url = this.api.getUrl();

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os todos
  getTodos(): Observable<NewTask> {
    return this.http.get<NewTask>(`${this.url}/todos`);
  }

  // salva um todo
  saveTodo(todo: NewTask[]): Observable<NewTask[]> {
    return this.http.post<NewTask[]>(`${this.url}/todos/` , JSON.stringify(todo), this.httpOptions);
  }

  deleteTodo(todo: NewTask) {
    return this.http.delete<NewTask>(`${this.url}/todos/${todo.id}`, this.httpOptions);
  }
}
