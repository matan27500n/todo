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
  // todos = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit Spain', false, new Date()),
  //   // { id: 1, description: 'Learn to Dance' },
  //   // { id: 2, description: 'Become an expert at Angular' },
  //   // { id: 3, description: 'Visit Spain' },
  // ];

  // todo = {
  //   id: 1,
  //   description: 'Learn to dance',
  // };

  todos: Todo[];

  message: string;

  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit(): void {
    this.refreshTodos();
  }

  public refreshTodos() {
    this.todoService.retrieveAllTodos('matan').subscribe((response) => {
      this.todos = response;
    });
  }

  public deleteTodo(id: number) {
    this.todoService.deleteTodo('matan', id).subscribe((response) => {
      this.message = `Delete of todo ${id} Successful!`;
      this.refreshTodos();
    });
  }

  public updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }

  public addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
