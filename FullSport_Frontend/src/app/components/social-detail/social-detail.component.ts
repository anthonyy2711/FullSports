import { FormGroup } from '@angular/forms';
import { SocialService } from 'src/app/services/social.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-social-detail',
  templateUrl: './social-detail.component.html',
  styleUrls: ['./social-detail.component.css']
})
export class SocialDetailComponent implements OnInit{
  id!:any;
  Post:any=[];
  socialDetailForm!: FormGroup;
  constructor(private route: ActivatedRoute, private socialService: SocialService, private router: Router,private ngZone: NgZone){}
  ngOnInit(){
    this.listPost()
  }
  listPost(){
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.socialService.ShowPost(this.id).subscribe(res => {
      this.Post = res;
    console.log(this.Post);
    this.Post = Object.values(res);
    });
  }
  
}
