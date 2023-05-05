import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { faTwitter,  faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  News:any=[];

  faTwitter=faTwitter;
  faFacebook=faFacebookF;
  faInstagram=faInstagram;
  faTiktok=faTiktok;

  constructor(private newsService: NewsService){}

  ngOnInit(): void {
    this.listNews();
  }

  listNews(){
    this.newsService.GetNews().subscribe(res => {
    
    console.log(res);
    
    this.News = Object.values(res);
    });
  }
}
