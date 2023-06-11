import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() { }

  // Método para actualizar el estado de autenticación
  setLoggedIn(value: boolean): void {
    this.loggedIn.next(value);
  }

  // Método para obtener el estado de autenticación como un Observable
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
