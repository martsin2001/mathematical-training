import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppFacadeService } from '../redux/app.facade';
import { History } from '../core/models/app.models';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { HistoryDialigComponent } from '../shared/history-dialig/history-dialig.component';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit, OnDestroy {
  currentHistory: History;

  private unsubscribe$: Subject<boolean> = new Subject();

  constructor(private appFacade: AppFacadeService, public dialog: MatDialog) {}

  ngOnInit() {
    this.loadHistory();
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  openHistoryDialog() {
    this.dialog.open(HistoryDialigComponent, {
      width: '70%',
      height: '500px',
      maxWidth: '800px',
      panelClass: 'history-dialog',
      data: this.currentHistory
    });
  }

  private loadHistory() {
    this.appFacade.loadHistory$
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((history: History) => {
        this.currentHistory = history;
      });
  }
}
