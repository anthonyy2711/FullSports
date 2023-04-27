/**
 * Database operations for users
 */

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, BehaviorSubject } from 'rxjs';

import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  REST_API: string = 'http://127.0.0.1:8000/api/';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private httpClient: HttpClient) {

  }

  // login validate
  validateLogin(data:any): Observable<any>{

    let API_URL = `${this.REST_API}login`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  //register user
  addUser(data:any): Observable<any>{

    let API_URL = `${this.REST_API}register`;
    console.log(data);
    return this.httpClient.post(API_URL, data)

      .pipe(
        catchError(this.handleError)
      )

  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }
}
