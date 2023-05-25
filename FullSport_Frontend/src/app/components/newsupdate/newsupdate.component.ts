import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-newsupdate',
  templateUrl: './newsupdate.component.html',
  styleUrls: ['./newsupdate.component.css']
})
export class NewsupdateComponent {
  News:any=[];
  file:any;
  id!:any;
  constructor(public formBuilder: FormBuilder,private router: Router,private ngZone: NgZone,private newsService: NewsService, private route: ActivatedRoute ) {}

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

  ngOnInit() { 
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.showNews();
  }

  /**
   * Function that returns the specified news
   * Call to the DB (show method) -> get type
   * Collect information from that id and print it on the web page
   */
  showNews(){
    this.newsService.ShowNews(this.id).subscribe(res => {
      this.News = Object.values(res);
    });
  }

  onSubmit(): any {

    var new_title  = this.postForm.get('new_title')?.value;
    var new_description  = this.postForm.get('new_description')?.value;
    var image  = this.postForm.get('formFile')?.value;
    var user_id = localStorage.getItem('user_id');
    var username = localStorage.getItem('username');

    const formData = new FormData();
    formData.append('id',this.id);
    formData.append('new_img', this.file);
    formData.append('new_title',new_title!);
    formData.append('new_description',new_description!);
    formData.append('user_id',user_id!);
    formData.append('author_name',username!);

    this.newsService.UpdateNews(formData)
    .subscribe(() => {

        this.ngZone.run(() => this.router.navigate(['home']))
      }, (err) => {
        console.log("error")
    });
  }
  imageUpload(event:any){
    console.log(event);
    this.file = event.target.files[0];
    console.log(this.file)
  }
}
