import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Post } from '../model/post';
@Injectable({
  providedIn: 'root'
})
export class SocialService {

  REST_API: string = 'http://127.0.0.1:8000/api/';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }


  GetPosts(): Observable<Post> {

    return this.httpClient.get<Post>(`${this.REST_API}posts`);
  }
  ShowPost(id:any): Observable<Post> {
    return this.httpClient.get<Post>(`${this.REST_API}posts/${id}`);
  }

  // Add Posts
  AddPost(data:any): Observable<any> {

    let API_URL = `${this.REST_API}posts`;
    return this.httpClient.post(API_URL, data,{ responseType: 'blob' })
    .pipe(
      catchError(this.handleError)
    )
  }


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
