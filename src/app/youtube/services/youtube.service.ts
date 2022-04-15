import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { ISearchItem } from '../models/search-item.model';
import { ISearchItemsFragment } from '../models/search-responce.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  getVideos(title: string): Observable<ISearchItem[]> {
    const url = `search?&type=video&part=snippet&maxResults=15&q=${title}`;
    return this.http.get<ISearchItemsFragment>(url).pipe(
      switchMap((videoResponse: ISearchItemsFragment) => {
        let ids = videoResponse.items.map(item => item.id.videoId);
        let observable = this.http
          .get<ISearchItemsFragment>(`videos?part=statistics,snippet&id=${ids}`)
          .pipe(
            map(response => {
              console.log(response);
              return response.items;
            })
          );
        return observable;
      })
    );
  }

  getVideoById(id: string): Observable<ISearchItem> {
    const url = `videos?part=statistics,snippet&id=${id}`;

    return this.http.get<ISearchItemsFragment>(url).pipe(
      map(searchItemFragment => {
        return searchItemFragment.items[0];
      })
    );
  }
}
