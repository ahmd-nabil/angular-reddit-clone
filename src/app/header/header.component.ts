import { Component, Input, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../services/auth/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faUser = faUser;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  getUserName(): string {
    return this.loginService.getUserName();
  }

  logout(): void {
    this.loginService.logout();
  }

  goToUserProfile(): void {
    // todo
  }
}
