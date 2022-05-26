import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  login = './assets/login.svg';

  public userName: string | null = 'Your Name';

  public isLogged: boolean = false;

  constructor(
    private router: Router,
    private readonly authService: AuthService
  ) {}

  goToRegisterPage() {
    this.router.navigate(['/auth/registration']);
  }

  goToLoginPage() {
    this.router.navigate(['/auth/login']);
  }

  ngOnInit(): void {
    this.authService.userName.subscribe(userName => {
      console.log('comp' + userName);
      this.userName = userName;
    });
    this.authService.isLogged.subscribe(val => {
      console.log('comp' + val);
      this.isLogged = val;
    });
  }

  logout() {
    localStorage.clear();
    this.authService.emitIsUserLogged();
    this.authService.emitUserNameFromStorage();
    this.router.navigate(['auth/login']);
  }
}
