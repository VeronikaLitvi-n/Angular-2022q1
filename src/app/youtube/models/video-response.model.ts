import { IVideoItem } from './video-item.model';

export interface IVideoItemsFragment {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<IVideoItem>;
}
