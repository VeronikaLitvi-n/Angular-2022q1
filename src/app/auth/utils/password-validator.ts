import { AbstractControl } from '@angular/forms';
import type { ValidationErrors } from '@angular/forms';

export class CustomValidator {
  static passwordValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const regex = new RegExp(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\\!@#\\$%\\^\\[\\]]).{8,}$'
    );
    const valid = regex.test(control.value);
    return valid ? null : { invalidPassword: true };
  }
}
