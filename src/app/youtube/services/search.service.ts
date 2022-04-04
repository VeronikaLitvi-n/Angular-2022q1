import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public searchText$ = new Subject<string>();

  public changeSearch(searchText: string) {
    this.searchText$.next(searchText);
  }
}
