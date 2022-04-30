import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userName!: Observable<string>;

  public isLogged!: Observable<boolean>;

  private isLogged$$ = new BehaviorSubject(false);

  private userName$$ = new BehaviorSubject('');

  constructor(private router: Router) {
    this.isLogged = this.isLogged$$.asObservable();
    this.userName = this.userName$$.asObservable();
    this.emitIsUserLogged();
    this.emitUserNameFromStorage();
  }

  public emitUserNameFromStorage() {
    const userName = localStorage.getItem('login');
    console.log('serv' + userName);
    if (userName !== null) {
      this.userName$$.next(userName);
    } else {
      this.userName$$.next('Your name');
    }
  }

  public emitIsUserLogged() {
    const logged = localStorage.getItem('logged');
    console.log('serv' + logged);
    this.isLogged$$.next(!!logged);
  }
}
