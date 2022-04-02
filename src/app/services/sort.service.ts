import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  public sortData$ = new Subject<{ sortType: string; tagInput: string }>();

  public changeSort(sortData: { sortType: string; tagInput: string }) {
    this.sortData$.next(sortData);
  }
}
