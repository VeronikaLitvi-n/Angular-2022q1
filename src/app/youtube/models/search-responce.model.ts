import { ISearchItem } from './search-item.model';

export interface ISearchItemsFragment {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<ISearchItem>;
}
