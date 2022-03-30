import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() itemWidth: number = 0;

  @Input() imageURL: string = '';

  @Input() viewedCount: string = '0';

  @Input() likedCount: string = '0';

  @Input() dislikeCount: string = '0';

  @Input() commentsCount: string = '0';

  @Input() itemTitle: string = '';

  @Input() published: string = '';


  constructor() {

  }

  ngOnInit(): void {}
}
