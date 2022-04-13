import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISearchItem } from '../../../youtube/models/search-item.model';
import response from '../../../../response.json';
import { ISearchItemsFragment } from '../../../youtube/models/search-responce.model';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchVideos(search: string): Observable<ISearchItem[]> {
    let lowerCaseSearch = search.toLowerCase();
    let result = (response as ISearchItemsFragment).items.filter(i =>
      i.snippet.title.toLowerCase().includes(lowerCaseSearch)
    );

    return of(result);
  }
}
