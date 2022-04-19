import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {
  password: string = '';

  email: string = '';

  constructor(public router: Router) {}

  register() {
    localStorage.setItem('login', this.email);
    localStorage.setItem('password', this.password);
    this.router.navigate(['auth/login']);
  }
}
