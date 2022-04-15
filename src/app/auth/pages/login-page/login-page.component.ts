import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import type { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
      password: ['', [Validators.required, this.passwordValidator]],
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  public passwordValidator(control: AbstractControl) {
    if (!control.value) {
      return null;
    }
    const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
    const valid = regex.test(control.value);
    return valid ? null : { invalidPassword: true };
  }

  public submit() {
    this.loginFormValue = this.loginForm.value;
    let storageLogin = localStorage.getItem('login');
    let storagePassword = localStorage.getItem('password');
    console.log(
      this.loginFormValue.mail,
      storageLogin,
      this.loginFormValue.password,
      storagePassword
    );
    if (
      this.loginFormValue.mail === storageLogin &&
      this.loginFormValue.password === storagePassword
    ) {
      localStorage.setItem('logged', 'true');
      this.authService.sendUserName(this.loginFormValue.mail);
      this.authService.isUSerLogged();
      this.router.navigate(['home']);
    }
  }
}
