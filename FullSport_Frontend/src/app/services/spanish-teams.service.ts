import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { spanishTeams } from '../model/spanishTeams';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpanishTeamsService {

  REST_API: string = 'http://127.0.0.1:8000';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }


  GetTeams(): Observable<spanishTeams> {
    return this.httpClient.get<spanishTeams>("http://127.0.0.1:8000/api/teams");
  }

  /* PutFixtures(): Observable<spanishTeams> {
    return this.httpClient.put<spanishTeams>("http://127.0.0.1:8000/api/PLgames",{});
  } */

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
