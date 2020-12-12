import { API_URL } from './../app.constants';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelloWorldBean } from './welcome-data.service';
import { map } from 'rxjs/operators';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthenticationService {
  users: string[] = [];
  constructor(private http: HttpClient) {}

  public isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  public getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  public isUserExists(username: string) {
    console.log('users username: ' + this.users[0]);
    console.log('users password: ' + this.users[1]);
    if (username === this.users[0]) {
      return this.users[1];
    }
    return '';
  }

  public getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  public getUsers() {
    return this.users;
  }

  public executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({ Authorization: basicAuthHeaderString });
    return this.http
      .get<AuthenticationBean>(`${API_URL}/basicauth`, { headers })
      .pipe(
        map((data) => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        })
      );
  }

  public executeJWTAuthenticationService(username: string, password: string) {
    return this.http
      .post<any>(`${API_URL}/authenticate`, { username, password })
      .pipe(
        map((data) => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          this.users.push(username);
          this.users.push(password);
          console.log('users username: ' + this.users[0]);
          console.log('users password: ' + this.users[1]);
          return data;
        })
      );
  }

  public logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
