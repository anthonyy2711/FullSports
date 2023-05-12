import { Post } from './../../model/post';
import { SocialService } from './../../services/social.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  Posts:any=[];
  itemsNumber = 1;
  imageUrl: any;
  logo:any;
  itemFormulario!:any;


  constructor(private socialService: SocialService){}

  ngOnInit(): void {
    this.listPosts();
  }


  listPosts(){
    this.socialService.GetPosts().subscribe(res => {
      this.Posts = res;
    console.log(this.Posts);

    this.Posts = Object.values(res);
    });
  }
}
