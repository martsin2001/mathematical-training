import { Injectable } from '@angular/core';
import {
  faPlus,
  faMinus,
  faDivide,
  faSnowflake
} from '@fortawesome/free-solid-svg-icons';
import { SelectedAction } from '../models/app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  calculationRequirementsState = {
    plus: {
      selectedAction: true,
      numbersRange: {
        from: 0,
        to: 100,
        maxValue: 5000
      },
      icon: faPlus,
      quantityNumbers: 3
    },
    minus: {
      selectedAction: false,
      numbersRange: {
        from: 0,
        to: 100,
        maxValue: 5000
      },
      icon: faMinus,
      quantityNumbers: 2
    },
    multiply: {
      selectedAction: false,
      numbersRange: {
        from: 0,
        to: 100,
        maxValue: 5000
      },
      icon: faSnowflake,
      quantityNumbers: 2
    },
    divide: {
      selectedAction: false,
      numbersRange: {
        from: 0,
        to: 100,
        maxValue: 5000
      },
      icon: faDivide,
      quantityNumbers: 2
    },
    random: {
      selectedAction: false,
      numbersRange: {
        from: 0,
        to: 100,
        maxValue: 5000
      },
      icon: faSnowflake,
      quantityNumbers: 2
    }
  };
  mainActions: any = Object.keys(this.calculationRequirementsState).filter(
    action => action !== 'random'
  );

  constructor() {}

  selectAction(action: SelectedAction) {
    const actionsState = this.calculationRequirementsState;
    for (const key in actionsState) {
      if (actionsState.hasOwnProperty(key)) {
        if (key === action) {
          actionsState[key].selectedAction = true;
        } else {
          actionsState[key].selectedAction = false;
        }
      }
    }
  }

  get getRandomAction(): SelectedAction {
    return this.mainActions[
      Math.floor(Math.random() * this.mainActions.length)
    ];
  }
}
