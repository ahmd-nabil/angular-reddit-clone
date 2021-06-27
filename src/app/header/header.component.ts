import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../services/auth/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faUser = faUser;
  isLoggedIn !: boolean;
  username !: string;
  
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.loggedIn.subscribe((loggedIn: boolean) => this.isLoggedIn = loggedIn);
    this.username = this.loginService.getUserName();
  }

  logout(): void {
    this.loginService.logout();
  }

  goToUserProfile(): void {
    // todo
  }
}
