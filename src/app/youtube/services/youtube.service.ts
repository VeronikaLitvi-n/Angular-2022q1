import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap, forkJoin } from 'rxjs';
import {
  ISearchItem,
  ISearchItemStatisticsResponse,
} from '../models/search-item.model';
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
        let observables = videoResponse.items.map(item =>
          this.http
            .get<ISearchItemStatisticsResponse>(
              `videos?part=statistics&id=${item.id.videoId}`
            )
            .pipe(
              map(statistics => {
                item.statistics = statistics.items[0].statistics;
                console.log(item);
                return item;
              })
            )
        );
        return forkJoin(observables);
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
