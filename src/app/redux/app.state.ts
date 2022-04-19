import { customCardsReducer } from './reducers/customCards.reducer';
import { youtubeVideosReducer } from './reducers/youtubeVideos.reducer';

export const state = {
  customCards: customCardsReducer,
  youtubeVideos: youtubeVideosReducer,
};
