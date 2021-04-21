import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/auth/signup.service';
import { SignupRequest } from './signup-request';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm !: FormGroup;
  signupRequest !: SignupRequest;

  constructor(private signupService: SignupService) {
    this.signupRequest = {
      email: '',
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  signup(): void {
    this.signupRequest.email = this.signupForm.get('email')?.value;
    this.signupRequest.username = this.signupForm.get('username')?.value;
    this.signupRequest.password = this.signupForm.get('password')?.value;
    this.signupService.signup(this.signupRequest);
  }
}
