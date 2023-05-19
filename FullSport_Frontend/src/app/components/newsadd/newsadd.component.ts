import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-newsadd',
  templateUrl: './newsadd.component.html',
  styleUrls: ['./newsadd.component.css']
})
export class NewsaddComponent {
  file:any;
  constructor(public formBuilder: FormBuilder,private router: Router,private ngZone: NgZone,private newsService: NewsService ) {}

  postForm=new FormGroup({
    new_title:new FormControl('',[
      Validators.required,
      Validators.maxLength(20)
    ]),
    new_description:new FormControl('',[
      Validators.required
    ]),
    new_img:new FormControl('',[
      Validators.required
    ]),
  })

  ngOnInit() { }

  onSubmit(): any {

    var new_title  = this.postForm.get('new_title')?.value;
    var new_description  = this.postForm.get('new_description')?.value;
    var image  = this.postForm.get('formFile')?.value;
    var user_id = localStorage.getItem('user_id');
    var username = localStorage.getItem('username');

    const formData = new FormData();
    formData.append('new_img', this.file);
    formData.append('new_title',new_title!);
    formData.append('new_description',new_description!);
    formData.append('user_id',user_id!);
    formData.append('author_name',username!);


    //console.log(data)
    this.newsService.AddNews(formData)
    .subscribe(() => {

        this.ngZone.run(() => this.router.navigate(['home']))
      }, (err) => {

    });
  }
  imageUpload(event:any){
    console.log(event);
    this.file = event.target.files[0];
    console.log(this.file)
  }
}
