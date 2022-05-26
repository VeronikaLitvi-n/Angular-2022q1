import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { ISearchItemsFragment } from '../models/search-responce.model';
import { IVideoItem } from '../models/video-item.model';
import { IVideoItemsFragment } from '../models/video-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  getVideos(title: string): Observable<IVideoItem[]> {
    const url = `search?&type=video&part=snippet&maxResults=15&q=${title}`;
    return this.http.get<ISearchItemsFragment>(url).pipe(
      switchMap(videoResponse => {
        let ids = videoResponse.items.map(item => item.id.videoId);
        let observable = this.http
          .get<IVideoItemsFragment>(`videos?part=statistics,snippet&id=${ids}`)
          .pipe(
            map(response => {
              return response.items;
            })
          );
        return observable;
      })
    );
  }

  getVideoById(id: string): Observable<IVideoItem> {
    const url = `videos?part=statistics,snippet&id=${id}`;
    return this.http.get<IVideoItemsFragment>(url).pipe(
      map(searchItemFragment => {
        console.log(searchItemFragment);
        return searchItemFragment.items[0];
      })
    );
  }
}
