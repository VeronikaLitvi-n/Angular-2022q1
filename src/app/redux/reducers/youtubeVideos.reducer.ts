import { createReducer, on } from '@ngrx/store';
import { updateYoutubeVideosSuccess } from '../actions/youtubeVideos.actions';
import { youtubeVideosInitialState } from '../state.model';

export const youtubeVideosReducer = createReducer(
  youtubeVideosInitialState,
  on(updateYoutubeVideosSuccess, (state, { videoResponse }) => ({
    ...state,
    youtubeVideos: [...videoResponse],
  }))
);
