import { BasicAuthenticationService } from './../../services/basic-authentication.service copy';
import { Router } from '@angular/router';
import { TodoDataService } from './../../services/todo-data.service';
import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
})
export class ListTodoComponent implements OnInit {
  todos: Todo[];

  message: string;

  constructor(
    private todoService: TodoDataService,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {
    this.refreshTodos();
  }

  public refreshTodos() {
    let username = this.basicAuthenticationService.getAuthenticatedUser();
    this.todoService.retrieveAllTodos(username).subscribe((response) => {
      this.todos = response;
    });
  }

  public deleteTodo(id: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      let username = this.basicAuthenticationService.getAuthenticatedUser();
      this.todoService.deleteTodo(username, id).subscribe((response) => {
        this.message = `Delete of todo ${id} Successful!`;
        this.refreshTodos();
      });
    }
  }

  public updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }

  public addTodo() {
    this.router.navigate(['todos', -1]);
  }

  public changeIsCompleted(id: number) {
    if (confirm('Your task is done, do you want to delete it?')) {
      let username = this.basicAuthenticationService.getAuthenticatedUser();
      this.todoService.deleteTodo(username, id).subscribe((response) => {
        this.message = `Delete of todo ${id} Successful!`;
        this.refreshTodos();
      });
    }
  }
}
