import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../core/services/app.service';
import { SelectedAction } from '../core/models/app.interfaces';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  @Input() set changeAction(action: SelectedAction) {
    this.setChangedAction(action);
  }
  currentAction: SelectedAction;
  selectedActionState: any;

  constructor(private appService: AppService) {}

  ngOnInit() {}

  updateCalculation() {
    this.appService.updateCalculation.next({ update: true });
  }

  setChangedAction(action: SelectedAction) {
    this.currentAction = action;
    this.selectedActionState = this.appService.getSelectedAction;
  }

  changeAmountNumbers(value) {
    this.selectedActionState.quantityNumbers = value;
  }

  changeRangeState(value, rangeName) {
    if (
      rangeName === 'from' &&
      value >= this.selectedActionState.numbersRange.to
    ) {
      this.selectedActionState.numbersRange.to = value + 100;
    }
    if (
      rangeName === 'to' &&
      value <= this.selectedActionState.numbersRange.from
    ) {
      setTimeout(() => {
        this.selectedActionState.numbersRange.to =
          this.selectedActionState.numbersRange.from + 100;
      });
    }
    this.selectedActionState.numbersRange[rangeName] = value;
  }
}
