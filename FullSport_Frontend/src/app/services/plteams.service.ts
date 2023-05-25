import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PLTeams } from '../model/PLTeams';

@Injectable({
  providedIn: 'root'
})
export class PLTeamsService {

  REST_API: string = 'http://127.0.0.1:8000';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }


  GetTeams(): Observable<PLTeams> {
    return this.httpClient.get<PLTeams>("http://127.0.0.1:8000/api/PLTeams");
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
