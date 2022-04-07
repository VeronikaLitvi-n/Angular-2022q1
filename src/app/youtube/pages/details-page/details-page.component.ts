import { Component, Input } from '@angular/core';
import type { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import response from '../../../../response.json';
import { ISearchItemsFragment } from '../../models/search-responce.model';
import { ISearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  public videoId: string = '';

  responseFragment: ISearchItemsFragment;

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

  constructor(public route: ActivatedRoute) {
    this.responseFragment = response as ISearchItemsFragment;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.videoId = params['id'];
      this.item = response.items.find(it => it.id === this.videoId)!;
      this.imageURL = this.item.snippet.thumbnails.maxres.url;
      this.itemTitle = this.item.snippet.title;
      this.published = this.item.snippet.publishedAt;
      this.description = this.item.snippet.description;
      this.viewedCount = this.item.statistics.viewCount;
      this.likedCount = this.item.statistics.likeCount;
      this.dislikeCount = this.item.statistics.dislikeCount;
      this.commentsCount = this.item.statistics.commentCount;
    });
  }

  returnBack() {
    history.back();
  }
}
