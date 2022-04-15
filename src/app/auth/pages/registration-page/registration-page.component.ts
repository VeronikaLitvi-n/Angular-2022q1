import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  formValue!: {
    firstName: string;
    lastName: string;
    mail: string;
    password: string;
  };

  public registerForm!: FormGroup;

  constructor(public router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]],
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
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
    this.formValue = this.registerForm.value;
    localStorage.setItem('login', this.formValue.mail);
    localStorage.setItem('password', this.formValue.password);
    this.router.navigate(['auth/login']);
  }
}
