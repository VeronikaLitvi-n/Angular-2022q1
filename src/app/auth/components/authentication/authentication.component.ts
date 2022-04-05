import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  login = './assets/login.svg';

  constructor(private router: Router) {}

  goToRegisterPage() {
    this.router.navigate(['registration']);
  }
}
