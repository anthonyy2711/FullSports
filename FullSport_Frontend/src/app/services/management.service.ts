import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Post } from '../model/post';
@Injectable({
  providedIn: 'root',
})
export class ManagementService {
  REST_API: string = 'http://127.0.0.1:8000/api/';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) {}

  GetUsers(): Observable<Post> {
    return this.httpClient.get<Post>(`${this.REST_API}users`);
  }

  GetUserById(id: any): Observable<any> {
    let API_URL = `${this.REST_API}users/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Add User
  AddUser(data: any): Observable<any> {
    let API_URL = `${this.REST_API}users`;
    return this.httpClient
      .post(API_URL, data, { responseType: 'blob' })
      .pipe(catchError(this.handleError));
  }
  //Update User
  updateTournament(
    id: any,
    name: any,
    last_name: any,
    email: any
  ): Observable<any> {
    let data = {
      id: id,
      name: name,
      last_name: last_name,
      email: email,
    };

    let API_URL = `${this.REST_API}users/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }
  // Delete Tournament
  deleteUser(id: any): Observable<any> {
    let API_URL = `${this.REST_API}users/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }
  //Error
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
