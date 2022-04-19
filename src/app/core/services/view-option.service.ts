import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewOptionService {
  public searchText$ = new Subject<string>();

  public sortData$ = new Subject<{ sortType: string; tagInput: string }>();

  public changeSearch(searchText: string) {
    this.searchText$.next(searchText);
  }

  public changeSort(sortData: { sortType: string; tagInput: string }) {
    this.sortData$.next(sortData);
  }
}
