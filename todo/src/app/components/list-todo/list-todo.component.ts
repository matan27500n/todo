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
  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an expert at Angular', false, new Date()),
    new Todo(3, 'Visit Spain', false, new Date()),
    // { id: 1, description: 'Learn to Dance' },
    // { id: 2, description: 'Become an expert at Angular' },
    // { id: 3, description: 'Visit Spain' },
  ];

  // todo = {
  //   id: 1,
  //   description: 'Learn to dance',
  // };

  constructor() {}

  ngOnInit(): void {}
}
