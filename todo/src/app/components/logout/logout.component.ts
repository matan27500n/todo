import { BasicAuthenticationService } from './../../services/basic-authentication.service copy';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  message: string;
  constructor(
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {
    this.basicAuthenticationService.logout();
    this.message = 'Thank You For Visit Our Application!';
    setTimeout(() => {
      this.router.navigateByUrl('login');
    }, 3000);
  }
}
