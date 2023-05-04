import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  News:any=[];

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
