import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './app.reducer';
import { selectHistory } from './app.selectors';
import { SubHistory } from '../core/models/app.models';
import { UpdateHistory } from './app.actions';

@Injectable({ providedIn: 'root' })
export class AppFacadeService {
  loadHistory$ = this.store.pipe(select(selectHistory));

  constructor(private store: Store<AppState>) {}

  updateHistory(payload: SubHistory) {
    this.store.dispatch(new UpdateHistory(payload));
  }
}
