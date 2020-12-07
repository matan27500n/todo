import { BasicAuthenticationService } from './basic-authentication.service copy';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorBasicAuthServiceService implements HttpInterceptor {
  constructor(private basicAuthenticationService: BasicAuthenticationService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // let username = 'matan';
    // let password = '123';
    // let basicAuthHeaderString =
    //   'Basic ' + window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();
    
    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: { Authorization: basicAuthHeaderString },
      });
    }
    return next.handle(request);
  }
}
