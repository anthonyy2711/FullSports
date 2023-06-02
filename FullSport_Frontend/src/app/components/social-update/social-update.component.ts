import { ActivatedRoute, Router } from '@angular/router';
import { SocialService } from 'src/app/services/social.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-social-update',
  templateUrl: './social-update.component.html',
  styleUrls: ['./social-update.component.css']
})
export class SocialUpdateComponent implements OnInit{
  Post: any = [];
  id!:any;
  postForm!: FormGroup;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private socialService:SocialService, private router: Router,private ngZone: NgZone){}
  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: [''],
      body: [''],
      image: [''],
    });
    this.getPost()
  }

  onSubmit(){
    var title  = this.postForm.get('title')?.value;
    var body  = this.postForm.get('body')?.value;
    var image  = this.postForm.get('image')?.value;

    const formData = new FormData();
    formData.append('title',title!);
    formData.append('body',body!);
    formData.append('image',image!);
    this.socialService.UpdatePost(formData)
    .subscribe(() => {

        this.ngZone.run(() => this.router.navigate(['social']))
      }, (err) => {

    });
  }
  getPost() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.socialService.ShowPost(this.id).subscribe((res) => {
      this.Post = res;
      console.log(this.Post);

      this.Post = Object.values(res);
      this.postForm.patchValue({
        title: res.posts.title,
        body: res.posts.body,
        image: res.posts.image,
      });
    });
  }
}
