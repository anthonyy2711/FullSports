import { Component, Input, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
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

  constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router,private ngZone: NgZone){}

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
      
      //console.log(this.News);

    });
  }

  //delete news from database
  /* deleteNews(id:any) {
    
    if(window.confirm('Do you want to go ahead?')) {
      this.newsService.DeleteNews(id).subscribe((res) => {
        
        this.News();
        tap(() => {
          // Redireccionar 
          this.router.navigate(['/home']);
        })
        
      })
    }
  } */
  deleteNews(id: any) {
    if (window.confirm('¿Quieres seguir con ello?')) {
      this.newsService.DeleteNews(id).subscribe(() => {
        // Redireccionar a la home despues del delete
        this.router.navigate(['/home']);
      });
    }
  }

}
