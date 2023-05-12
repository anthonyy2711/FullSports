import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-social-add',
  templateUrl: './social-add.component.html',
  styleUrls: ['./social-add.component.css']
})
export class SocialAddComponent implements OnInit {

  file:any;
  constructor(public formBuilder: FormBuilder,private router: Router,private ngZone: NgZone,private socialService: SocialService) {}

  postForm=new FormGroup({
    title:new FormControl('',[
      Validators.required,
      Validators.maxLength(20)
    ]),
    body:new FormControl('',[
      Validators.required
    ]),
    image:new FormControl('',[
      Validators.required
    ]),
  })

  ngOnInit() { }

  onSubmit(): any {

    var title  = this.postForm.get('title')?.value;
    var body  = this.postForm.get('body')?.value;
    var image  = this.postForm.get('formFile')?.value;
    var user_id = localStorage.getItem('user_id')
    // var data = {
    //   "image": this.file && this.file.name,
    //   "title": title,
    //   "body": body,
    //   'user_id': 3,
    // }

    const formData = new FormData();
    formData.append('image', this.file);
    formData.append('title',title!);
    formData.append('body',body!);
    formData.append('user_id',user_id!);

    //console.log(data)
    this.socialService.AddPost(formData)
    .subscribe(() => {

        this.ngZone.run(() => this.router.navigate(['social']))
      }, (err) => {

    });
  }
  imageUpload(event:any){
    console.log(event);
    this.file = event.target.files[0];
    console.log(this.file)
  }
}
