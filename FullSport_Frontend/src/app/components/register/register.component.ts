import { UserService } from './../../services/user.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  constructor(private router: Router, private user:UserService, private ngZone: NgZone){}

  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+')
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+')
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    repeatpassword: new FormControl('', [
      Validators.required
    ])
  })

  ngOnInit(): void {

  }

  submit(){
    var name      = this.registerForm.get('name')?.value;
    var last_name = this.registerForm.get('lastname')?.value;
    var email     = this.registerForm.get('email')?.value;
    var pass      = this.registerForm.get('password')?.value;


    var data = {
      "name":      name,
      "last_name": last_name,
      "email":     email,
      "password":  pass,
    }

    this.user.addUser(data)
    .subscribe(() => {
        this.ngZone.run(() => this.router.navigate(['login']))
      }, (err) => {

    });
  }

}
