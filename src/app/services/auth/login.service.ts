import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, Subject } from 'rxjs';
import { Jwt } from 'src/app/auth/login/jwt';
import { LoginRequest } from 'src/app/auth/login/login-request';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  loggedIn !: boolean;
  loggedInChange: Subject<boolean> = new Subject<boolean>();
  
  constructor(private httpClient: HttpClient,
              private localStorage: LocalStorageService) { 
                this.loggedInChange.subscribe(val => this.loggedIn = val);
              }

  login(loginRequest: LoginRequest): Observable<boolean> {
    return this.httpClient.post<Jwt>('http://localhost:8080/api/auth/login', loginRequest).pipe( map ( jwt => {
      this.localStorage.store('username', jwt.username);  
      this.localStorage.store('Authorization', jwt.token);
      this.loggedInChange.next(true);
      return true;
    }));
  }

  getUserName() {
    return this.localStorage.retrieve('username');
  }

  getJwtToken() {
    return this.localStorage.retrieve('Authorization');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }

  logout() {
    this.localStorage.clear('Authorization');
    this.localStorage.clear('username');
    this.loggedInChange.next(false);
    window.location.reload();
  }
}
