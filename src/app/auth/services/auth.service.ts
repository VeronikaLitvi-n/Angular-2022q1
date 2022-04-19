import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userName$ = new Subject<string>();

  public sendUserName(userName: string) {
    this.userName$.next(userName);
  }
}
