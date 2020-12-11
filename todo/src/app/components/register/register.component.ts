import { BasicAuthenticationService } from './../../services/basic-authentication.service copy';
import { TodoDataService } from './../../services/todo-data.service';
import { Component, OnInit } from '@angular/core';

export class User {
  public constructor(
    public id: number,
    public username: string,
    public password: string
  ) {}
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = new User(4, '', '');
  message: string = '';
  invalidLogin = false;
  constructor(
    private todoDataService: TodoDataService,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {}

  public registerCustomer() {
    this.user.id = 5;
    this.todoDataService.registerUser(this.user).subscribe(
      (res) => {
        this.message = 'user create successfully!!';
        alert('right');
      },
      (err) => {
        this.invalidLogin = true;
        this.message = err.message;
        alert('wrong');
      }
    );
  }
}
