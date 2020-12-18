import { API_URL, TODO_JPA_API_URL } from './../app.constants';
import { Todo } from './../components/list-todo/list-todo.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  public registerUser(username: string, password: string) {
    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/${password}`,null);
  }

  public retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
  }

  public deleteTodo(username: string, id: number) {
    return this.http.delete(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
    );
  }

  public retrieveTodo(username: string, id: number) {
    return this.http.get<Todo>(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
    );
  }

  public updateTodo(username: string, id: number, todo: Todo) {
    return this.http.put(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`,
      todo
    );
  }

  public createTodo(username: string, todo: Todo) {
    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`, todo);
  }
}
