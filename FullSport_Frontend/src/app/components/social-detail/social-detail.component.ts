import { ManagementService } from './../../services/management.service';
import { TokenService } from './../../services/token.service';
import { FormGroup } from '@angular/forms';
import { SocialService } from 'src/app/services/social.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-social-detail',
  templateUrl: './social-detail.component.html',
  styleUrls: ['./social-detail.component.css']
})
export class SocialDetailComponent implements OnInit{
  id!:any;
  idUserPost!:any;
  idUserToken!:any;
  idPost!:any;
  Post:any=[];
  ownPost:boolean = true;
  isAdmin:boolean = false;
  role!:any;
  socialDetailForm!: FormGroup;
  constructor(private route: ActivatedRoute, private tokenService: TokenService,private socialService: SocialService, private router: Router,private ngZone: NgZone, private managementService:ManagementService){}
  ngOnInit(){
    this.listPost()
    this.checkAdmin()
  }
  listPost(){
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    this.socialService.ShowPost(this.id).subscribe(res => {
    this.checkUser(res.posts.user_id)
    this.Post = Object.values(res);
    });
  }
  checkUser(value:string){
    this.idUserToken = this.tokenService.getIdToken();
    this.idUserPost = value
    if(this.idUserToken == this.idUserPost){
      this.ownPost = false;
    }
  }
  deletePost(){

    if (window.confirm('¿Quieres seguir con ello?')) {
      this.socialService.DeletePost(this.id).subscribe(() => {
        // Redirect to home after delete
        this.router.navigate(['/social']);
      });
    }
  }
  checkAdmin(){
    var id = this.tokenService.getIdToken();

      this.managementService.GetRole(id).subscribe(res => {
        this.role = res.toString(); ;
        if(this.role == 'admin'){
          this.isAdmin = true;
        }
      });

  }

}
