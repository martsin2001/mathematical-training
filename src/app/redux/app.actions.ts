import { Action } from '@ngrx/store';

export const enum AppActions {
  loadHistory = '[History] load history',
  historyLoaded = '[History] history loaded',
  updateHistory = '[History] update history'
}

export class LoadHistory implements Action {
  readonly type = AppActions.loadHistory;
}

export class HistoryLoaded implements Action {
  readonly type = AppActions.historyLoaded;
  constructor(public payload: any) {}
}
