import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { IState } from '../../../redux/state.model';
import { createCustomCard } from '../../../redux/actions/customCards.actions';
import { ICustomCard } from '../../models/custom-card.model';
import { nanoid } from 'nanoid';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  public adminForm!: FormGroup;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private store: Store<IState>
  ) {}

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
    this.store.dispatch(
      createCustomCard({
        newCustomCard: {
          snippet: {
            title: this.adminForm.controls['title'].value,
            description: this.adminForm.controls['description'].value,
            thumbnails: {
              medium: { url: this.adminForm.controls['img'].value },
              standard: { url: this.adminForm.controls['img'].value },
            },
            publishedAt: this.adminForm.controls['creationDate'].value,
          },
          id: nanoid(10),
          statistics: {
            viewCount: '1',
            likeCount: '1',
            dislikeCount: '1',
            favoriteCount: '1',
            commentCount: '1',
          },
        } as ICustomCard,
      })
    );
    this.router.navigate(['home']);
  }
}
