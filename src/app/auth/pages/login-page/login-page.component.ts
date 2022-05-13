import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import type { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CustomValidator } from '../../utils/password-validator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginFormValue!: {
    mail: string;
    password: string;
  };

  public loginForm!: FormGroup;

  constructor(
    public router: Router,
    private readonly authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, CustomValidator.passwordValidator]],
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  public submit() {
    this.loginFormValue = this.loginForm.value;
    let storageLogin = localStorage.getItem('login');
    let storagePassword = localStorage.getItem('password');
    if (
      this.loginFormValue.mail === storageLogin &&
      this.loginFormValue.password === storagePassword
    ) {
      localStorage.setItem('logged', 'true');
      localStorage.setItem('login', this.loginFormValue.mail);
      this.authService.emitUserNameFromStorage();
      this.authService.emitIsUserLogged();
      this.router.navigate(['home/video']);
    }
  }
}
