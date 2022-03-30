import { Component, OnInit } from '@angular/core';
import { ISearchItemsFragment } from '../models/search-responce.model';
import response from '../../../response.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})

export class SearchResultsComponent implements OnInit {
  responseFragment: ISearchItemsFragment;

  constructor() {
    this.responseFragment = response as ISearchItemsFragment;
  }

  ngOnInit(): void {}
}

