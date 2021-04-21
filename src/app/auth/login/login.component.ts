import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  successRegistrationMessage !: String;

  constructor(private loginService: LoginService,
              private toastr: ToastrService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
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

    this.activatedRoute.queryParams.subscribe(
      params => {
        if(params.registered === 'true') {
          this.toastr.success('Signed Up Successfully.');
          this.successRegistrationMessage = "Check your inbox to activate your account";
        }
      }
    )
  }

  login(): void {
    this.loginRequest.username = this.loginForm.get('username')?.value;
    this.loginRequest.password = this.loginForm.get('password')?.value;
    this.loginService.login(this.loginRequest).subscribe(
      (loggedIn) => {
        if(loggedIn) 
        this.router.navigateByUrl('/');
      },
      () => {
        this.toastr.error('Username or password are not correct!');
      }
    )
  }
}
