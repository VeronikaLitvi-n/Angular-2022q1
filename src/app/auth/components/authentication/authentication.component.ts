import { Component } from '@angular/core';
import type { OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit, OnDestroy {
  login = './assets/login.svg';

  public userName: string | null = null;

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
    this.authService.userName$.subscribe(userName => {
      this.userName = userName;
    });
    this.authService.isLogged.subscribe(val => (this.isLogged = val));
  }

  logout() {
    localStorage.clear();
    this.userName = null;
    this.authService.isUSerLogged();
    this.router.navigate(['auth/login']);
  }

  ngOnDestroy(): void {
    this.authService.userName$.unsubscribe();
  }
}
