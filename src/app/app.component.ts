import { Component, OnInit } from '@angular/core';
import { GoogleLoginService } from './services/google-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user: any;

  constructor(private google: GoogleLoginService) {}

  ngOnInit() {
    this.user = this.google.sendUser();
  }

  login() {
    this.user = this.google.login();
  }

  logout() {
    this.google.logout();
  }
}
