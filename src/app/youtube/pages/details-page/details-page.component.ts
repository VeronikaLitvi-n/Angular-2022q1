import { Component, Input } from '@angular/core';
import type { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISearchItem } from '../../models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  public videoId: string = '';

  item: ISearchItem | null = null;

  @Input() itemWidth: number = 0;

  @Input() imageURL: string = '';

  @Input() viewedCount: string = '0';

  @Input() likedCount: string = '0';

  @Input() dislikeCount: string = '0';

  @Input() commentsCount: string = '0';

  @Input() itemTitle: string = '';

  @Input() published: string = '';

  @Input() description: string = '';

  constructor(
    public route: ActivatedRoute,
    public readonly youtubeService: YoutubeService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        mergeMap(params => {
          return this.youtubeService.getVideoById(params['id']);
        })
      )
      .subscribe(item => {
        this.imageURL = item.snippet.thumbnails.maxres.url;
        this.itemTitle = item.snippet.title;
        this.published = item.snippet.publishedAt;
        this.description = item.snippet.description;
        this.viewedCount = item.statistics.viewCount;
        this.likedCount = item.statistics.likeCount;
        this.dislikeCount = item.statistics.dislikeCount;
        this.commentsCount = item.statistics.commentCount;
      });
  }

  returnBack() {
    history.back();
  }
}
