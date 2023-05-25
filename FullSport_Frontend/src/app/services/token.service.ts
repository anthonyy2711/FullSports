import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken() {
    return localStorage.getItem('token');
  }
  removeToken() {
    localStorage.removeItem('token');
  }
  getIdToken() {
    var token = localStorage.getItem('token');
    var str = atob(token!.split('.')[1]);
    var jsonObject  =JSON.parse(str)

    let sub = jsonObject.sub;
    console.log(sub);
    return sub;
  }

}
