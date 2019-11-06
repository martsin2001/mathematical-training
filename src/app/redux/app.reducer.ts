import { AppActions, AppTypes } from './app.actions';
import { createFeatureSelector } from '@ngrx/store';

const initialState: AppState = {
  history: null
};

export interface AppState {
  history: History;
}

export function AppReducer(state: AppState = initialState, action: AppActions) {
  switch (action.type) {
    case AppTypes.updateHistory:
      return {
        ...state,
        history: action.payload
      };
    default:
      return state;
  }
}

export const GetAppState = createFeatureSelector<AppState>('app-state');
