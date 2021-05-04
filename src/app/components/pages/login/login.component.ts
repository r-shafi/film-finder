import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginService } from 'src/app/services/google-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private google: GoogleLoginService, private router: Router) {}

  user: any;

  ngOnInit() {
    this.user = this.google.sendUser();
  }

  login() {
    this.user = this.google.login();
    this.router.navigateByUrl('/');
  }

  logout() {
    this.google.logout();
  }
}
