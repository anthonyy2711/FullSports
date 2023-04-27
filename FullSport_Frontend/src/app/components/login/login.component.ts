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
  constructor(private router: Router, private user:UserService, private ngZone: NgZone) {}

  login=new FormGroup({
    email:new FormControl('',[
      Validators.required
    ]),
    pass:new FormControl('',[
      Validators.required
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
        if (res == "Credenciales incorrectas") {
          this.oculta = true;
        }
        else{
          this.oculta = false;
          localStorage.setItem('usuari',JSON.stringify(res));
        }



        this.ngZone.run(() => this.router.navigate(['home'])) // if all good return to home
      }, (err) => {

    });
  }

}
