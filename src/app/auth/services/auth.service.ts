import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userName$ = new Subject<string>();

  public isLogged!: Observable<boolean>;

  private isLogged$$ = new BehaviorSubject(false);

  constructor(private router: Router) {
    this.isLogged = this.isLogged$$.asObservable();
  }

  public sendUserName(userName: string) {
    this.userName$.next(userName);
  }

  public isUSerLogged() {
    const logged = localStorage.getItem('logged');
    if (logged) {
      this.isLogged$$.next(true);
    } else {
      this.isLogged$$.next(false);
    }
  }
}
