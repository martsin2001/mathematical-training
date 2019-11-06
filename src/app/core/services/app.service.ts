import { Injectable } from '@angular/core';
import {
  faPlus,
  faMinus,
  faDivide,
  faSnowflake
} from '@fortawesome/free-solid-svg-icons';
import { SelectedAction } from '../models/app.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  updateCalculation: BehaviorSubject<{ update: boolean }> = new BehaviorSubject(
    { update: false }
  );

  calculationRequirementsState = {
    plus: {
      selectedAction: true,
      numbersRange: {
        from: 0,
        to: 100
      },
      icon: faPlus,
      quantityNumbers: 2
    },
    minus: {
      selectedAction: false,
      numbersRange: {
        from: 0,
        to: 100
      },
      icon: faMinus,
      quantityNumbers: 2
    },
    multiply: {
      selectedAction: false,
      numbersRange: {
        from: 0,
        to: 100
      },
      icon: faSnowflake,
      quantityNumbers: 2
    },
    divide: {
      selectedAction: false,
      numbersRange: {
        from: 0,
        to: 100
      },
      icon: faDivide,
      quantityNumbers: 2
    },
    random: {
      selectedAction: false
      // icon: faSnowflake,
      // quantityNumbers: 2
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

  get getSelectedAction() {
    const actions = this.calculationRequirementsState;
    for (const key in actions) {
      if (actions.hasOwnProperty(key) && actions[key].selectedAction) {
        return actions[key];
      }
    }
  }
}
