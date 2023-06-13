import { TokenService } from './../../services/token.service';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Token } from '@angular/compiler';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faFutbol = faFutbol;
  faBasketball = faBasketball;

  isLoggedin!: boolean;
  token = localStorage.getItem('token');
  token2: string = '';
  username = localStorage.getItem('username');
  usernamewithoutquotes: string = '';
  constructor(
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.toggleButtonVisibility();
    this.auth.isLoggedIn().subscribe((loggedIn: boolean) => {
      this.isLoggedin = loggedIn;
    });

  }

  toggleButtonVisibility() {
    if (this.token) {
      this.isLoggedin = true;
      this.usernamewithoutquotes = this.username!;
    }
  }
  logout() {
    this.auth.setLoggedIn(false);
    localStorage.clear();
    window.localStorage.clear();
  }
  ifUserExists() {
    if (this.token) {
    }
  }
  getIdToken() {
    var str = atob(this.token!.split('.')[1]);
    var jsonObject  =JSON.parse(str)

    let sub = jsonObject.sub;
    console.log(sub);
  }
}
