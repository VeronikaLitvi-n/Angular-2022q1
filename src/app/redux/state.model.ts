import { ICustomCard } from '../core/models/custom-card.model';
import { IVideoItem } from '../youtube/models/video-item.model';

export interface IState {
  customCards: ICustomCardsState;
  youtubeVideos: IYoutubeVideosState;
}

export interface ICustomCardsState {
  customCards: ICustomCard[];
}

export const customCardsInitialState: ICustomCardsState = {
  customCards: [],
};

export interface IYoutubeVideosState {
  youtubeVideos: IVideoItem[];
}

export const youtubeVideosInitialState: IYoutubeVideosState = {
  youtubeVideos: [],
};

export const initialState: IState = {
  customCards: customCardsInitialState,
  youtubeVideos: youtubeVideosInitialState,
};
