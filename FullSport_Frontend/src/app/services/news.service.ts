import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  REST_API: string = 'http://127.0.0.1:8000';

 
}
