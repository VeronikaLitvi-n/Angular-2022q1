import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewOptionService {
  public titleSearch$ = new Subject<string>();

  public tagSearch$ = new Subject<string>();

  public sortType$ = new Subject<string>();

  public changeTitleSearch(titleSearch: string) {
    this.titleSearch$.next(titleSearch);
  }

  public changeTagSearch(tagSearch: string) {
    this.tagSearch$.next(tagSearch);
  }

  public changeSort(sortType: string) {
    this.sortType$.next(sortType);
  }
}
