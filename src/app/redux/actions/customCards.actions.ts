import { createAction, props } from '@ngrx/store';
import { ICustomCard } from '../../core/models/custom-card.model';

export const createCustomCard = createAction(
  '[ADMIN PAGE] CREATE CUSTOM CARD',
  props<{ newCustomCard: ICustomCard }>()
);
