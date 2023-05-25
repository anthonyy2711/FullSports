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
  userrole = localStorage.getItem('role');//Get from local storage role where the format is like this: ["user"]
  get role() {//Return role withiuot [" "]
    return this.userrole?.replace('["', '').replace('"]', '');
  }

  constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router,private ngZone: NgZone){}

  ngOnInit(): void{
    
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

  /**
   * Function to control the visibility of the update and delete news button for journalist and admin users 
   */
  updateDeleteButtonVisibility() {
    if(this.token){//check if logget
      if(this.role == 'journalist'){//check if rol is journalist
        if(this.News[1].author_name == this.username){//check new authorname is same logged user name 
          this.isLoggedin = true;
          this.usernamewithoutquotes = this.username!
        }
      }
      else if(this.role == 'admin'){//check if rol is admin
        this.isLoggedin = true;
      }
    }
   
  }
}
