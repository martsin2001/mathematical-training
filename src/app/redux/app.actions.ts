import { Action } from '@ngrx/store';

export const enum AppTypes {
  loadHistory = '[History] load history',
  updateHistory = '[History] update history'
}

export class LoadHistory implements Action {
  readonly type = AppTypes.loadHistory;
}

export class UpdateHistory implements Action {
  readonly type = AppTypes.updateHistory;
  constructor(public payload: any) {}
}

export type AppActions = LoadHistory | UpdateHistory;
