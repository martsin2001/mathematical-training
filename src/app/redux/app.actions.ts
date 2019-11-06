import { Action } from '@ngrx/store';
import { SubHistory } from '../core/models/app.models';

export const enum AppTypes {
  loadHistory = '[History] load history',
  updateHistory = '[History] update history'
}

export class LoadHistory implements Action {
  readonly type = AppTypes.loadHistory;
}

export class UpdateHistory implements Action {
  readonly type = AppTypes.updateHistory;
  constructor(public payload: SubHistory) {}
}

export type AppActions = LoadHistory | UpdateHistory;
