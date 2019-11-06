import { createSelector } from '@ngrx/store';
import { GetAppState } from './app.reducer';

export const selectHistory = createSelector(
  GetAppState,
  state => state.history
);
