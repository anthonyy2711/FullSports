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
    var image  = this.postForm.get('image')?.value;

    var data = {
      "image": image,
      "title": title,
      "body": body,
      'user_id': 3,
    }
    console.log(data)
    this.socialService.AddPost(data)
    .subscribe(() => {

        this.ngZone.run(() => this.router.navigate(['social']))
      }, (err) => {

    });
  }
}
