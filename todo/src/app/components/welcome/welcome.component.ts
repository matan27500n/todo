import {
  WelcomeDataService,
  HelloWorldBean,
} from './../../services/welcome-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
   user: string = '';
  count = 0;
  welcomeMessageFromService: string;
  isConst = false;

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit(): void {
      this.user = this.route.snapshot.params['name'];
  }

  public getWelcomeMessageWithParameter() {
    this.service
      .executeHelloWorldBeanServiceWithPathVariable(this.user)
      .subscribe(
        (response) => {
          this.handleSuccessfulResponse(response);
        },
        (error) => {
          this.handleErrorResponse(error);
        }
      );
  }

  public handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message;
  }

  public handleErrorResponse(error: HelloWorldBean) {
    this.welcomeMessageFromService = error.error.message;
  }
}
