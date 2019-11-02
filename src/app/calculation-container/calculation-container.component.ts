import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faPlus,
  faMinus,
  faDivide,
  faSnowflake
} from '@fortawesome/free-solid-svg-icons';
import { SelectedAction } from '../core/models/app.interfaces';

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

  constructor() {}

  ngOnInit() {}

  selectAction(action: SelectedAction) {
    this.changeAction.emit(action);
  }
}
