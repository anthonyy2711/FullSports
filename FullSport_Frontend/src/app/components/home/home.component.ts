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
  windowRef:any=null;

  faTwitter=faTwitter;
  faFacebook=faFacebookF;
  faInstagram=faInstagram;
  faTiktok=faTiktok;

  //For button visibility
  isLoggedin: boolean = false;
  token = localStorage.getItem('token');
  username = localStorage.getItem('username');
  usernamewithoutquotes: string = '';

  constructor(private newsService: NewsService){}

  ngOnInit(): void {
    this.pushNews();
    this.createButtonVisibility();
  }

  /**
   * Push news into array News
   */
  pushNews(){
    this.newsService.GetNews().subscribe(res => {
      this.News = Object.values(res);
    });
  }

  /**
   * Function which takes the id of the news item to open it in a new tab
   * @param id 
   */
  openWindow(id:any){
    this.windowRef= window.open(`/newdetail/${id}`,"New Details");
    this.windowRef.addEventListener("message",this.receivemessage.bind(this), false);
  }
  receivemessage(evt:any){
    //console.log(evt.data);
  }
  
  loadMore(){

  }

  /**
   * Function to control the visibility of the create news button for registered users 
   */
  createButtonVisibility() {
    if(this.token){
      this.isLoggedin = true;
      this.usernamewithoutquotes = this.username!
    }
  }
}
