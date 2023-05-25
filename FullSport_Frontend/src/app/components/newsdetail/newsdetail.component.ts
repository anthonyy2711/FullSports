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

  //For buttons visibility
  isLoggedin: boolean = false;
  token = localStorage.getItem('token');
  username = localStorage.getItem('username');
  usernamewithoutquotes: string = '';

  constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router,private ngZone: NgZone){}

  ngOnInit(): void{
    
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      //console.log(this.id);
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
      //console.log(res);
      this.News = Object.values(res);
      //console.log(this.News);
      //console.log("User name: " + this.username);
      //console.log("Authir name: " + this.News[1].author_name);
      this.updateDeleteButtonVisibility();
    });
  }

  //Delete news from database
  deleteNews(id: any) {
    if (window.confirm('¿Quieres seguir con ello?')) {
      this.newsService.DeleteNews(id).subscribe(() => {
        // Redirect to home after delete
        this.router.navigate(['/home']);
      });
    }
  }

  updateDeleteButtonVisibility() {
    if(this.token && this.News[1].author_name == this.username){
    //If it has a token and the author name matches the user name, it is the owner of the news item and goes to true
      this.isLoggedin = true;
      this.usernamewithoutquotes = this.username!
    }
  }
}
