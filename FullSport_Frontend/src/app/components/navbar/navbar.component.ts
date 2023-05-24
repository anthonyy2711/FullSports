import { TokenService } from './../../services/token.service';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  faFutbol=faFutbol;
  faBasketball=faBasketball;

  isLoggedin: boolean = false;
  token = localStorage.getItem('token');
  token2:string = '';
  username = localStorage.getItem('username')
  usernamewithoutquotes: string = ''
  constructor(private router: Router, private user:UserService, private ngZone: NgZone, private location: Location){}

  ngOnInit():void {
    this.toggleButtonVisibility()
  }

  toggleButtonVisibility() {


    if(this.token){
      this.isLoggedin = true;
      this.usernamewithoutquotes = this.username!
    }

  }
  logout(){
    localStorage.clear()
    window.location.reload();
  }
  ifUserExists(){
    if(this.token){

    }
  }

}
