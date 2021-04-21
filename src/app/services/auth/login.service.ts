import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { Jwt } from 'src/app/auth/login/jwt';
import { LoginRequest } from 'src/app/auth/login/login-request';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private httpClient: HttpClient,
              private localStorage: LocalStorageService) { }

  login(loginRequest: LoginRequest) {
    this.httpClient.post<Jwt>('http://localhost:8080/api/auth/login', loginRequest).subscribe(
      jwt => this.localStorage.store("Authorization", jwt.token));
  }
}
