import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PLGames } from '../model/PLGames';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PLGamesService {

  REST_API: string = 'http://127.0.0.1:8000';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }


  GetFixtures(): Observable<PLGames> {
    return this.httpClient.get<PLGames>("http://127.0.0.1:8000/api/PLgames");
  }

  PutFixtures(): Observable<PLGames> {
    return this.httpClient.put<PLGames>("http://127.0.0.1:8000/api/PLgames",{});
  }

  /* PutFixtures(): Observable<Fixture> {
    return this.httpClient.put<Fixture>("http://127.0.0.1:8000/api/games"), new Fixture();
  } */


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
