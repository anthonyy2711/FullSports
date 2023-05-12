import { Injectable } from '@angular/core';
import { PLStandings } from '../model/PLStandings';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PLStandingsService {

  REST_API: string = 'http://127.0.0.1:8000';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }


  GetCompetition(): Observable<PLStandings> {
    return this.httpClient.get<PLStandings>("http://127.0.0.1:8000/api/PLStandings");
  }

  PostCompetition(): Observable<any> {
    return this.httpClient.put<any>("http://127.0.0.1:8000/api/PLStandings",{});
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
