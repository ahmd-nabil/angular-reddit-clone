import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private localStorage: LocalStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = this.localStorage.retrieve('authorization');
    if(jwt) {
      req = this.addJwtToHeader(req, jwt);
    }
    return next.handle(req);
  }

  addJwtToHeader(req: HttpRequest<any>, jwt: any) {
    return req.clone({
      headers: req.headers.set("Authorization", jwt)
    });
  }

}
