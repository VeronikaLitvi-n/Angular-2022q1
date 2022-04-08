import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  userName: string = '';

  password: string = '';

  constructor(
    public router: Router,
    private readonly authService: AuthService
  ) {}

  loginUser() {
    let storageLogin = localStorage.getItem('login');
    let storagePassword = localStorage.getItem('password');
    console.log(storageLogin, storagePassword, this.userName, this.password);
    if (this.userName === storageLogin && this.password === storagePassword) {
      localStorage.setItem('logged', 'true');
      this.authService.sendUserName(this.userName);
      this.router.navigate(['home']);
    }
  }
}
