import { createReducer, on } from '@ngrx/store';
import { createCustomCard } from '../actions/customCards.actions';
import { customCardsInitialState } from '../state.model';

export const customCardsReducer = createReducer(
  customCardsInitialState,
  on(createCustomCard, (state, { newCustomCard }) => ({
    ...state,
    customCards: [...state.customCards, newCustomCard],
  }))
);
