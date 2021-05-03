import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AngularFireAuth) {}

  user: any;

  ngOnInit(): void {}

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.auth.user.subscribe((data) => {
      this.user = data;
      localStorage.setItem('token', data?.uid || '');
    });
  }

  logout() {
    this.auth.signOut();
    localStorage.removeItem('token');
  }
}
