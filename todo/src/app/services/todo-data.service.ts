import { Todo } from './../components/list-todo/list-todo.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  public retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(
      `http://localhost:8080/users/${username}/todos`
    );
  }

  public deleteTodo(username: string, id: number) {
    return this.http.delete(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  public retrieveTodo(username: string, id: number) {
    return this.http.get<Todo>(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  public updateTodo(username: string, id: number, todo: Todo) {
    return this.http.put(
      `http://localhost:8080/users/${username}/todos/${id}`,
      todo
    );
  }

  public createTodo(username: string, todo: Todo) {
    return this.http.post(
      `http://localhost:8080/users/${username}/todos`,
      todo
    );
  }
}
