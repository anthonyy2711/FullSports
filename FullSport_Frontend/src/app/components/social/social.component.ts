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

  windowRef:any=null;

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
  limitCharacters(){
    var paragraph = document.getElementById('myParagraph');
    var maxLength = 50; // maximum number of characters to display

    if (paragraph!.textContent!.length > maxLength) {
      var shortenedText = paragraph!.textContent!.substr(0, maxLength) + '...';
      paragraph!.textContent = shortenedText;
    }
  }
}
