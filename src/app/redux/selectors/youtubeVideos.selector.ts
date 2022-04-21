import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IYoutubeVideosState } from '../state.model';

export const getState =
  createFeatureSelector<IYoutubeVideosState>('youtubeVideos');

export const selectYoutubeVideos = createSelector(
  getState,
  (state: IYoutubeVideosState) => state.youtubeVideos
);
