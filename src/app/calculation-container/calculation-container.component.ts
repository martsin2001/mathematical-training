import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faPlus,
  faMinus,
  faDivide,
  faSnowflake
} from '@fortawesome/free-solid-svg-icons';
import { SelectedAction, SubHistory } from '../core/models/app.models';
import { AppFacadeService } from '../redux/app.facade';

@Component({
  selector: 'app-calculation-container',
  templateUrl: './calculation-container.component.html',
  styleUrls: ['./calculation-container.component.scss']
})
export class CalculationContainerComponent implements OnInit {
  @Input() selectedAction: SelectedAction;
  @Output() changeAction: EventEmitter<SelectedAction> = new EventEmitter();

  faIcons = {
    faPlus,
    faMinus,
    faDivide,
    faSnowflake
  };

  constructor(private appFacade: AppFacadeService) {}

  ngOnInit() {}

  selectAction(action: SelectedAction | string) {
    this.changeAction.emit(action as SelectedAction);
  }

  updateHistory(payload: SubHistory) {
    this.appFacade.updateHistory(payload);
  }
}
