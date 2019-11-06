import { AppActions, AppTypes } from './app.actions';
import { createFeatureSelector } from '@ngrx/store';
import { History } from '../core/models/app.models';
import * as moment from 'moment';

const initialState: AppState = {
  history: null
};

export interface AppState {
  history: History;
}

export function AppReducer(state: AppState = initialState, action: AppActions) {
  switch (action.type) {
    case AppTypes.loadHistory:
      return {
        ...state,
        history: { ...state.history, endDate: moment().toDate() } as History
      };
    case AppTypes.updateHistory: {
      return {
        ...state,
        history: {
          ...state.history,
          startDate: state.history
            ? state.history.startDate
            : moment().toDate(),
          history: [
            ...(state.history || { history: [] }).history,
            action.payload
          ]
        } as History
      };
    }

    default:
      return state;
  }
}

export const GetAppState = createFeatureSelector<AppState>('app-state');
