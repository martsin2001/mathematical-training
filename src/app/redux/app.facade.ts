import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import { selectHistory } from './app.selectors';
import { SubHistory } from '../core/models/app.models';
import { UpdateHistory } from './app.actions';

@Injectable({ providedIn: 'root' })
export class AppFacadeService {
  loadHistory$ = selectHistory;

  constructor(private store: Store<AppState>) {}

  updateHistory(payload: SubHistory) {
    this.store.dispatch(new UpdateHistory(payload));
  }
}
