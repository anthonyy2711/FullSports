import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/model/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.css']
})
export class NewsdetailComponent implements OnInit{

  News:any=[];

  id!:any;

  constructor(private route: ActivatedRoute, private newsService: NewsService){}

  ngOnInit(): void{
    
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      //console.log(this.id);
    });

    this.showNews();
    
  }

  // llamar a la BD (metodo show) -> tipo get
  // recoger informacion de esa id y printarla en la pagina web 
  showNews(){
    this.newsService.ShowNews(this.id).subscribe(res => {
    
      //console.log(res);
      
      this.News = Object.values(res);
      
      console.log(this.News);

    });
  }

  
}
