import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  public authenticate(username: string, password: string) {
    if (username === 'matan' && password === '123') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }

  public isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  public logout() {
    sessionStorage.removeItem('authenticaterUser');
  }
}
