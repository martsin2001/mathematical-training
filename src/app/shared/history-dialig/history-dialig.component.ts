import { Component, OnInit, Inject } from '@angular/core';
import { History } from 'src/app/core/models/app.models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-history-dialig',
  templateUrl: './history-dialig.component.html',
  styleUrls: ['./history-dialig.component.scss']
})
export class HistoryDialigComponent implements OnInit {
  generalTime: string;

  constructor(
    public dialogRef: MatDialogRef<HistoryDialigComponent>,
    @Inject(MAT_DIALOG_DATA) public data: History
  ) {
    this.initGeneralTime();
  }

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }

  private initGeneralTime() {
    const duration = moment.duration(
      moment(this.data.endDate).diff(moment(this.data.startDate))
    );
    this.generalTime =
      this.transformTime(duration.get('minutes')) +
      ' : ' +
      this.transformTime(duration.get('seconds'));
  }

  private transformTime(time: number) {
    if (time.toString().length < 2) {
      return '0' + time;
    } else {
      return time;
    }
  }
}
