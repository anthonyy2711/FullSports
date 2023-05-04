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

  logo:any;
  itemFormulario!:any;


  constructor(private socialService: SocialService){}

  ngOnInit(): void {
    this.listPosts();
  }


  listPosts(){
    this.socialService.GetPosts().subscribe(res => {

    console.log(res);

    this.Posts = Object.values(res);
    });
  }
}
