import { ISearchItem } from './search-item.model';

export interface ISearchItemsFragment {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<ISearchItem>;
}
