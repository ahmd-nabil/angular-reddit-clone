import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from './login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  loginRequest !: LoginRequest;

  constructor(private loginService: LoginService) {
    this.loginRequest = {
      username: '',
      password: ''
    };
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    });
  }

  login(): void {
    this.loginRequest.username = this.loginForm.get('username')?.value;
    this.loginRequest.password = this.loginForm.get('password')?.value;
    this.loginService.login(this.loginRequest);
  }
}
