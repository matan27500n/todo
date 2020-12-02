import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from './../list-todo/list-todo.component';
import { TodoDataService } from './../../services/todo-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoService
        .retrieveTodo('matan', this.id)
        .subscribe((data) => (this.todo = data));
    }
  }

  public saveTodo() {
    if (this.id === -1) {
      this.todoService.createTodo('matan', this.todo).subscribe((data) => {
        this.router.navigate(['todo']);
      });
    } else {
      this.todoService
        .updateTodo('matan', this.id, this.todo)
        .subscribe((data) => {
          this.router.navigate(['todo']);
        });
    }
  }
}
