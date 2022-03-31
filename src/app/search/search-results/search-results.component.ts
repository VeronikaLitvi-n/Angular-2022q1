import { Component, OnInit } from '@angular/core';
import { ISearchItemsFragment } from '../models/search-responce.model';
import { ISearchItem } from '../models/search-item.model';
import response from '../../../response.json';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})

export class SearchResultsComponent implements OnInit {
  responseFragment: ISearchItemsFragment;

  searchItems: Array<ISearchItem>;

  constructor(private readonly searchService: SearchService) {
    this.responseFragment = response as ISearchItemsFragment;
    this.searchItems = this.responseFragment.items;
  }

  ngOnInit(): void {
    this.searchService.searchText$.subscribe((searchText) => {
      let lowerCaseTrimmedText = searchText.toLowerCase().trim();

      this.searchItems = this.responseFragment.items.filter(
        (item) => item.snippet.title.toLowerCase().includes(lowerCaseTrimmedText),
      );
    });
  }
}

