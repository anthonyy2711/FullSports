import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { News } from '../model/news';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  REST_API: string = 'http://127.0.0.1:8000/api/';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  GetNews(): Observable<News> {
    return this.httpClient.get<News>("http://127.0.0.1:8000/api/news");
  }

  ShowNews(id:any): Observable<News> {
    return this.httpClient.get<News>(`http://127.0.0.1:8000/api/news/show/${id}`);
  }

  // Add news
  AddNews(data:any): Observable<any> {

    let API_URL = `${this.REST_API}news`;
    return this.httpClient.post(API_URL, data,{ responseType: 'blob' })//Method post to add //Type "blob" (Binary Large Object)
      .pipe(
        catchError(this.handleError)
      )
  }
  // Update news
  UpdateNews(data:any): Observable<any> {

    let API_URL = `${this.REST_API}news/update`;
    console.log("API_URL: " + API_URL);
    return this.httpClient.post(API_URL, data,{ responseType: 'blob' })//Method put to update //Type "blob" (Binary Large Object)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Delete News
  DeleteNews(id:any): Observable<any> {
    let API_URL = `${this.REST_API}news/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(//Method delete to delete
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
