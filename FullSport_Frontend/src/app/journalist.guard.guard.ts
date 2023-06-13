import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './services/token.service';
import { ManagementService } from './services/management.service';

@Injectable({
  providedIn: 'root'
})
export class JournalistGuardGuard implements CanActivate {
  role!:any;
  id!:any;
  constructor(private route:Router, private tokenService:TokenService, private managementService: ManagementService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    this.id = this.tokenService.getIdToken();
    this.role = this.managementService.GetRole(this.id);
    console.log(this.role)
    if(this.role != 'Journalist'){
      this.route.navigate(['/home']);
    }
    return true;
  }
  }
