import { createAction, props } from '@ngrx/store';
import { IVideoItem } from '../../youtube/models/video-item.model';

export const getYoutubeVideos = createAction('[HOME PAGE] GET YOUTUBE VIDEOS');

export const updateYoutubeVideosSuccess = createAction(
  '[HOME PAGE] GET YOUTUBE VIDEOS SUCCESS',
  props<{ videoResponse: IVideoItem[] }>()
);
