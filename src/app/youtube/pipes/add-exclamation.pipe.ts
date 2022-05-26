import { Pipe } from '@angular/core';
import type { PipeTransform } from '@angular/core';

@Pipe({
  name: 'addExclamation',
})
export class AddExclamationPipe implements PipeTransform {
  transform(value: string): string {
    return `${value}!`;
  }
}
