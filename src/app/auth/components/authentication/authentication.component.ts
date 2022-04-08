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

  userName: string | null = null;

  constructor(
    private router: Router,
    private readonly authService: AuthService
  ) {}

  goToRegisterPage() {
    this.router.navigate(['/auth/registration']);
  }

  ngOnInit(): void {
    this.authService.userName$.subscribe(userName => {
      this.userName = userName;
    });
  }

  ngOnDestroy(): void {
    this.authService.userName$.unsubscribe();
  }

  isLogged(): boolean {
    return this.userName !== null;
  }

  logout() {
    localStorage.clear();
    this.userName = null;
    this.router.navigate(['auth/login']);
  }
}
