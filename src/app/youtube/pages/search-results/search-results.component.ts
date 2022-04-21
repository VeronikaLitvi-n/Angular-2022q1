import { Component } from '@angular/core';
import type { OnInit, OnDestroy } from '@angular/core';
import { ViewOptionService } from '../../../core/services/view-option.service';
import {
  Subject,
  takeUntil,
  debounceTime,
  distinctUntilChanged,
  filter,
  Subscription,
  switchMap,
} from 'rxjs';
import { YoutubeService } from '../../services/youtube.service';
import { IVideoItem } from '../../models/video-item.model';
import { IState } from '../../../redux/state.model';
import { Store, select } from '@ngrx/store';
import { updateYoutubeVideosSuccess } from '../../../redux/actions/youtubeVideos.actions';
import { ICustomCard } from '../../../core/models/custom-card.model';
import { getCustomCards as getCustomCards } from '../../../redux/selectors/customCards.selector';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  searchedItems!: Array<IVideoItem>;

  customCards!: Array<ICustomCard>;

  searchedSortedItems!: Array<IVideoItem>;

  searchFieldValue: string = '';

  sortType: string = '';

  tagInput: string = '';

  titleSearchSubscription: Subscription | null = null;

  tagSearchSubscription: Subscription | null = null;

  sortTypeSubscription: Subscription | null = null;

  private readonly compareViewCount = (
    a: IVideoItem,
    b: IVideoItem
  ): number => {
    return +a.statistics.viewCount - +b.statistics.viewCount;
  };

  constructor(
    private readonly viewOptionService: ViewOptionService,
    private readonly youtubeService: YoutubeService,
    private store: Store<IState>
  ) {}

  notifier = new Subject();

  ngOnInit(): void {
    this.titleSearchSubscription = this.viewOptionService.titleSearch$
      .asObservable()
      .pipe(
        takeUntil(this.notifier),
        debounceTime(1000),
        filter(v => v.length >= 3 || v.length === 0),
        distinctUntilChanged(),
        switchMap(title => this.youtubeService.getVideos(title))
      )
      .subscribe(searchedItems => {
        this.store.dispatch(
          updateYoutubeVideosSuccess({ videoResponse: searchedItems })
        );
        this.searchedItems = searchedItems;
        this.updateResults();
      });

    this.viewOptionService.changeTitleSearch('');

    this.sortTypeSubscription = this.viewOptionService.sortType$
      .asObservable()
      .pipe(takeUntil(this.notifier))
      .subscribe(sortType => {
        this.sortType = sortType;
        this.updateResults();
      });

    this.tagSearchSubscription = this.viewOptionService.tagSearch$
      .asObservable()
      .pipe(takeUntil(this.notifier))
      .pipe(debounceTime(1000))
      .subscribe(tagInput => {
        this.tagInput = tagInput;
        this.updateResults();
      });

    this.store
      .pipe(select(getCustomCards))
      .subscribe(cards => (this.customCards = cards));
  }

  private readonly compareDate = (a: IVideoItem, b: IVideoItem): number => {
    let timeA = new Date(a.snippet.publishedAt).getTime();
    let timeB = new Date(b.snippet.publishedAt).getTime();
    return timeA - timeB;
  };

  private updateResults() {
    let lowerCaseTrimmedText = this.searchFieldValue.toLowerCase().trim();
    let updatedItems: IVideoItem[] = this.searchedItems;

    if (lowerCaseTrimmedText.length > 0) {
      updatedItems = updatedItems.filter(item =>
        item.snippet.title.toLowerCase().includes(lowerCaseTrimmedText)
      );
    }

    let trimmedTag = this.tagInput.trim();
    let searchType = this.sortType;

    if (trimmedTag.length > 0) {
      updatedItems = updatedItems.filter(item =>
        item.snippet.tags.includes(trimmedTag)
      );
    }

    if (searchType === 'date-increase') {
      updatedItems.sort(this.compareDate);
    } else if (searchType === 'date-decrease') {
      updatedItems.sort((a, b) => this.compareDate(b, a));
    } else if (searchType === 'count-increase') {
      updatedItems.sort(this.compareViewCount);
    } else if (searchType === 'count-decrease') {
      updatedItems.sort((a, b) => this.compareViewCount(b, a));
    }
    this.searchedSortedItems = updatedItems;
  }

  ngOnDestroy() {
    this.notifier.next(null);
    this.notifier.complete();
  }
}
