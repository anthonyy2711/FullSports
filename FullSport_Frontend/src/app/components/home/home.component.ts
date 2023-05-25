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
  username = localStorage.getItem('username');//Get from local storage username
  usernamewithoutquotes: string = '';
  userrole = localStorage.getItem('role');//Get from local storage role where the format is like this: ["user"]
  get role() {//Return role withiuot [" "]
    return this.userrole?.replace('["', '').replace('"]', '');
  }

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
   * Function to control the visibility of the create news button for registered and admin users 
   */
  createButtonVisibility() {
    if(this.token){//check if logget
      if(this.role == 'journalist' || 'admin' && this.role != 'user'){//check if rol is journalist or admin and no user for show the button
        this.isLoggedin = true;//Turn true and show de button create
        this.usernamewithoutquotes = this.username!
      }
    }
  }

}
