import { IItemStatistics } from './item-statistics.model';

interface ISearchItemFragmentThumbnails {
  url: string;
  width: number;
  height: number;
}

export interface ISearchItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
    channelId: string;
    playlistId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: ISearchItemFragmentThumbnails;
      medium: ISearchItemFragmentThumbnails;
      high: ISearchItemFragmentThumbnails;
      standard: ISearchItemFragmentThumbnails;
      maxres: ISearchItemFragmentThumbnails;
    };
    statistics: IItemStatistics;
    channelTitle: string;
    liveBroadcastContent: string;
  };
}
