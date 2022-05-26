import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidator } from '../../utils/password-validator';

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
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      mail: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [Validators.required, CustomValidator.passwordValidator],
      ],
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  public submit() {
    if (this.registerForm.valid) {
      this.formValue = this.registerForm.value;
      localStorage.setItem('login', this.formValue.mail);
      localStorage.setItem('password', this.formValue.password);
      this.router.navigate(['auth/login']);
    }
  }
}
