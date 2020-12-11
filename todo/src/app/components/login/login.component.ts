import { BasicAuthenticationService } from './../../services/basic-authentication.service copy';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {}

  handleJWTAuthLogin() {
    this.basicAuthenticationService
      .executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        (data) => {
          this.invalidLogin = false;
          this.router.navigate(['welcome', this.username]);
        },
        (error) => {
          this.invalidLogin = true;
        }
      );
  }
}
