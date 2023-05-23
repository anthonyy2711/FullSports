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

  constructor(private newsService: NewsService){}

  ngOnInit(): void {
    this.pushNews();

  }

  pushNews(){//push news into array News
    this.newsService.GetNews().subscribe(res => {
    //console.log(res);
      this.News = Object.values(res);
    });
  }

  //this.windowRef=null;
  openWindow(id:any){
    //console.log(id);
    //this.windowRef= window.open("/newdetail","child", "toolbar=no,location=no,directories=no,status=no,menubar=no,titlebar=no,fullscreen=no,scrollbars=1,resizable=no,width=430,height=220,left=500,top=100");
    this.windowRef= window.open(`/newdetail/${id}`,"New Details");

    this.windowRef.addEventListener("message",this.receivemessage.bind(this), false);

  }
  receivemessage(evt:any){
    //console.log(evt.data);
  }
  
  loadMore(){

  }

}
