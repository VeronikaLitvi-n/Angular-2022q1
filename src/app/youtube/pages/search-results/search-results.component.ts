import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { ISearchItemsFragment } from '../../models/search-responce.model';
import { ISearchItem } from '../../models/search-item.model';
import response from '../../../../response.json';
import { SearchService } from '../../services/search.service';
import { SortService } from '../../services/sort.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  responseFragment: ISearchItemsFragment;

  searchItems: Array<ISearchItem>;

  searchFieldValue: string = '';

  sortParams: { sortType: string; tagInput: string } = {
    sortType: '',
    tagInput: '',
  };

  private readonly compareDate = (a: ISearchItem, b: ISearchItem): number => {
    let timeA = new Date(a.snippet.publishedAt).getTime();
    let timeB = new Date(b.snippet.publishedAt).getTime();
    return timeA - timeB;
  };

  private readonly compareViewCount = (
    a: ISearchItem,
    b: ISearchItem
  ): number => {
    return +a.statistics.viewCount - +b.statistics.viewCount;
  };

  constructor(
    private readonly searchService: SearchService,
    private readonly sortService: SortService,
    private router: Router,
    public route: ActivatedRoute
  ) {
    this.responseFragment = response as ISearchItemsFragment;
    this.searchItems = this.responseFragment.items;
  }

  ngOnInit(): void {
    this.searchService.searchText$.subscribe(searchText => {
      this.searchFieldValue = searchText;
      this.updateResults();
    });

    this.sortService.sortData$.subscribe(sortParams => {
      this.sortParams = sortParams;
      this.updateResults();
    });
  }

  private updateResults() {
    let lowerCaseTrimmedText = this.searchFieldValue.toLowerCase().trim();
    let updatedItems: ISearchItem[] = this.responseFragment.items;

    if (lowerCaseTrimmedText.length > 0) {
      updatedItems = updatedItems.filter(item =>
        item.snippet.title.toLowerCase().includes(lowerCaseTrimmedText)
      );
    }

    let trimmedTag = this.sortParams.tagInput.trim();
    let searchType = this.sortParams.sortType;

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

    this.searchItems = updatedItems;
  }
}
