import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenSettingsService {
  public isShowSettings$ = new Subject<boolean>();

  public showSettings(isShowSettings: boolean) {
    this.isShowSettings$.next(isShowSettings);
  }
}
