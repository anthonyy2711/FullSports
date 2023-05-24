import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Post } from './../../model/post';
import { ManagementService } from './../../services/management.service';
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

  constructor(
    private formBuilder: FormBuilder,
    private managementService: ManagementService
  ) {}

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: [''],
      last_name: [''],
      email: [''],
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
    var password = this.profileForm.get('password')?.value;


    const formData = new FormData();
    formData.append('title',name!);
    formData.append('body',last_name!);
    formData.append('user_id',email!);
    formData.append('user_id',password!);
    alert('hola')
  }
}
