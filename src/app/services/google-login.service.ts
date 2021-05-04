import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class GoogleLoginService {
  constructor(public auth: AngularFireAuth, private router: Router) {}

  user: any;

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.auth.user.subscribe((data) => {
      this.user = data;

      localStorage.setItem('token', data?.uid || '');
      localStorage.setItem('user', JSON.stringify(data));
      return this.user;
    });
  }

  logout() {
    this.auth.signOut();
    Object.keys(localStorage).forEach((key) => localStorage.removeItem(key));
    this.router.navigateByUrl('/login');
  }

  sendUser() {
    return this.user || JSON.parse(localStorage.getItem('user') || '{}');
  }
}
