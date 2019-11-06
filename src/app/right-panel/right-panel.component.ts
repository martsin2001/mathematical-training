import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppFacadeService } from '../redux/app.facade';
import { History } from '../core/models/app.models';
import { takeUntil, filter, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit, OnDestroy {
  currentHistory: History;

  private unsubscribe$: Subject<boolean> = new Subject();

  constructor(private appFacade: AppFacadeService) {}

  ngOnInit() {
    this.loadHistory();
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  private loadHistory() {
    this.appFacade.loadHistory$
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((history: History) => {
        console.log(history);
        this.currentHistory = history;
      });
  }
}
