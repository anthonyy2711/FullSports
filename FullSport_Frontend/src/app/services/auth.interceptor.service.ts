import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService {
  constructor(private tokenService: TokenService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const accessToken = this.tokenService.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + accessToken,
      },
    });
    return next.handle(req);
  }
}
