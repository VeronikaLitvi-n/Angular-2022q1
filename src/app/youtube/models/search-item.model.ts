interface ISearchItemFragmentThumbnails {
  url: string;
  width: number;
  height: number;
}

export interface ISearchItemStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface ISearchItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
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
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: ISearchItemStatistics;
}

interface IStatisticsItems {
  etag: string;
  id: string;
  kind: string;
  statistics: ISearchItemStatistics;
}
export interface ISearchItemStatisticsResponse {
  etag: string;
  items: IStatisticsItems[];
  kind: string;
  pageInfo: {};
}
