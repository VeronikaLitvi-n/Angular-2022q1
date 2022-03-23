interface ISearchItemFragmentThumbnails {
  'url': string,
  'width': number,
  'height': number,
}

interface ISearchItem {
  'kind': string,
  'etag': string,
  'id': string,
  'snippet': {
    'publishedAt': string,
    'channelId': string,
    'title': string,
    'description': string,
    'thumbnails': ISearchItemFragmentThumbnails,
    'medium': ISearchItemFragmentThumbnails,
    'high': ISearchItemFragmentThumbnails,
    'standard': ISearchItemFragmentThumbnails,
    'maxres': ISearchItemFragmentThumbnails,
  },
  'channelTitle': string,
  'tags': string[],
  'categoryId': string,
  'liveBroadcastContent': string,
  'localized': {
    'title': string,
    'description': string,
  },
  'defaultAudioLanguage': string,
  'statistics': {
    'viewCount': string,
    'likeCount': string,
    'dislikeCount': string,
    'favoriteCount': string,
    'commentCount': string
  },
}

export interface ISearchItemsFragment {
  'kind': string,
  'etag': string,
  'pageInfo': {
    'totalResults': number,
    'resultsPerPage': number
  },
  'items': Array<ISearchItem>
}
