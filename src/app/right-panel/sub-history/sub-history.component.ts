import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { SubHistory } from 'src/app/core/models/app.models';

@Component({
  selector: 'app-sub-history',
  templateUrl: './sub-history.component.html',
  styleUrls: ['./sub-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubHistoryComponent implements OnInit {
  @Input() subHistory: SubHistory;

  constructor() {}

  ngOnInit() {}
}
