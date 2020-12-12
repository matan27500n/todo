import { BasicAuthenticationService } from './../../services/basic-authentication.service copy';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forgot.component.html',
  styleUrls: ['./password-forgot.component.css'],
})
export class PasswordForgotComponent implements OnInit {
  username = '';
  password = '';
  isAuthenticated = false;
  isNotAuthenticated = false;
  constructor(private basicAuthenticationService: BasicAuthenticationService) {}

  ngOnInit(): void {}

  public getNewPassword() {
    console.log('user name: ' + this.username);
    this.password = this.basicAuthenticationService.isUserExists(this.username);
    if (this.password == '') {
      this.isAuthenticated = true;
      this.isNotAuthenticated = false;
      this.password = 'Sorry, the user does not exists in our system..';
    } else {
      this.isNotAuthenticated = true;
      this.isAuthenticated = false;
    }
  }
}
