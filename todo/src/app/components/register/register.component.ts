import { BasicAuthenticationService } from './../../services/basic-authentication.service copy';
import { TodoDataService } from './../../services/todo-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username = '';
  password = '';
  message: string = '';
  invalidLogin = false;
  constructor(
    private todoDataService: TodoDataService,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {}

  public registerCustomer() {
    this.todoDataService.registerUser(this.username, this.password).subscribe(
      (res) => {
        this.message = 'You registered successfully! Welcome ' + this.username;
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
