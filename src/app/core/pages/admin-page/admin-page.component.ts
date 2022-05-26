import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  public adminForm!: FormGroup;

  constructor(public router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      img: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
      linkVideo: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
      creationDate: ['', [Validators.required, this.dateValidator]],
    });
  }

  get adminFormControl() {
    return this.adminForm.controls;
  }

  public dateValidator(control: AbstractControl) {
    let today: Date = new Date();
    if (new Date(control.value) > today) return { LessThanToday: true };

    return null;
  }

  submit() {
    alert('New card created');
    this.router.navigate(['home']);
  }
}
