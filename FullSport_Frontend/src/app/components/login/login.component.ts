import { UserService } from './../../services/user.service';
import { User } from './../../model/user';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  oculta!:boolean;
  email!:any;
  pass!:any;
  token!:any;
  role!:any;
  username!:any;
  user_id!:any;
  constructor(private router: Router, private user:UserService, private ngZone: NgZone) {}

  login=new FormGroup({
    email:new FormControl('',[
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')//email format pattern
    ]),
    pass:new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ])
  })

  ngOnInit(): void {

  }

  submit(){
    var email = this.login.get('email')?.value;
    var pass = this.login.get('pass')?.value;

    var data = {
      "email":    email,
      "password": pass
    }

    this.user.validateLogin(data)
    .subscribe(res => {
        if (res.message == "Unauthorized") {
          this.oculta = true;
        }
        else{
          this.oculta = false;
          this.token = localStorage.setItem('token',JSON.stringify(res.authorization.token).replace(/["']/g, ''));
          this.role = localStorage.setItem('role', JSON.stringify(res.roles))
          this.username = localStorage.setItem('username', JSON.stringify(res.user.name + " "+res.user.last_name).replace(/["']/g, ''))
          this.user_id = localStorage.setItem('user_id', JSON.stringify(res.user.id).replace(/[\[\]"']+/g,''))
        }

        this.ngZone.run(() => this.router.navigate(['home'])) // if all good return to home

      }, (err) => {

    });

  }

}
