import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ICustomCardsState } from '../state.model';

export const getState = createFeatureSelector<ICustomCardsState>('customCards');

export const getCustomCards = createSelector(
  getState,
  (state: ICustomCardsState) => state.customCards
);
