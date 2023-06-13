import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { Post } from './../../model/post';
import { ManagementService } from './../../services/management.service';
import { Route, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  User: any = [];
  itemsNumber = 1;
  imageUrl: any;
  logo: any;
  itemFormulario!: any;
  user_id = localStorage.getItem('user_id');
  username!:any;
  profileForm!: FormGroup;
  isChangePassword =false;
  hideAndShowPassword = 1;

  constructor(
    private formBuilder: FormBuilder,
    private managementService: ManagementService,
    private ngZone: NgZone,
    private router:Router,
    private tokenService: TokenService,
  ) {}

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: [''],
      last_name: [''],
      email: [''],
      new_password: [''],
      actual_password: [''],
      repeat_new_password: [''],
    });
    this.getUser();
  }

  getUser() {
    this.managementService.GetUserById(this.user_id).subscribe((res) => {
      this.User = res;
      console.log(this.User);

      this.User = Object.values(res);
      this.profileForm.patchValue({
        name: res.name,
        last_name: res.last_name,
        email: res.email,

      });
      this.username = res.name + res.last_name
    });
  }
  onSubmit(){
    var name  = this.profileForm.get('name')?.value;
    var last_name  = this.profileForm.get('last_name')?.value;
    var email  = this.profileForm.get('email')?.value;
    var user_id = this.tokenService.getIdToken();
    var new_password = this.profileForm.get('new_password')?.value;
    var actual_password = this.profileForm.get('actual_password')?.value;
    var repeat_new_password = this.profileForm.get('repeat_new_password')?.value;
    const formData = new FormData();
    formData.append('name',name!);
    formData.append('last_name',last_name!);
    formData.append('email',email!);
    formData.append('id',user_id!);
    formData.append('new_password',new_password!);
    formData.append('actual_password',actual_password!);
    formData.append('repeat_new_password',repeat_new_password!);
    this.managementService.updateUser(formData)
    .subscribe(() => {

        this.ngZone.run(() => this.router.navigate(['social']))
      }, (err) => {

    });
  }
  showChangePassword(){
    this.isChangePassword=true;
  }
}
