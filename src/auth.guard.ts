import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import type { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}

  public canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (localStorage.getItem('logged') === 'true') {
      return true;
    } else {
      this.router.navigate(['not-found']);
    }
    return false;
  }
}
