import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { AppService } from 'src/app/core/services/app.service';
import { SelectedAction, SubHistory } from 'src/app/core/models/app.models';

enum ResultStatus {
  correct = 'correct',
  mistake = 'mistake'
}

@Component({
  selector: 'app-calculation-panel',
  templateUrl: './calculation-panel.component.html',
  styleUrls: ['./calculation-panel.component.scss']
})
export class CalculationPanelComponent implements OnInit {
  @Input() set changeAction(action: SelectedAction) {
    this.setSelectedAction(action);
  }
  @Output() updateHistory: EventEmitter<SubHistory> = new EventEmitter();

  refreshIcon = faSync;
  resultForm: FormGroup;
  currentAction: SelectedAction;
  selectedAction: SelectedAction;
  selectedActionState: any;
  generatedNumbers: any[];
  expectedResult: number;
  isResultCorrect: boolean;
  resultStatus: ResultStatus;

  constructor(private fb: FormBuilder, private appService: AppService) {}

  ngOnInit() {
    this.initResultForm();
    this.subscribeToUpdateCalculation();
  }

  isNumber(element: any) {
    return !isNaN(element);
  }

  initCalculation() {
    this.defineAndSetAction();
    this.selectedActionState = this.appService.getSelectedAction;
    const randomNumbers = Array(this.selectedActionState.quantityNumbers)
      .fill(0)
      .map(() =>
        this.generateRandomNumber(
          this.selectedActionState.numbersRange.from,
          this.selectedActionState.numbersRange.to
        )
      );
    this.expectedResult = this.getExpectedResult(randomNumbers);
    this.generatedNumbers = randomNumbers
      .join(',@,')
      .split(',')
      .map((el: any) => {
        if (el === '@') {
          return this.selectedActionState.icon;
        } else {
          return Number(el);
        }
      });
  }

  answer() {
    if (this.expectedResult.toString() === this.resultForm.value.result) {
      this.resultStatus = ResultStatus.correct;
    } else {
      this.resultStatus = ResultStatus.mistake;
    }
    this.updateCurrentHistory();
    setTimeout(() => {
      this.resetState();
    }, 1000);
  }

  get getResultValue() {
    return !!this.resultForm.value.result;
  }

  private resetState() {
    this.resultStatus = null;
    this.resultForm.reset();
    this.initCalculation();
  }

  private updateCurrentHistory() {
    this.updateHistory.emit({
      result: this.resultForm.value.result,
      action: this.selectedActionState.icon,
      expectedResult: this.expectedResult.toString(),
      question: this.generatedNumbers.filter(value => typeof value === 'number')
    } as SubHistory);
  }

  private subscribeToUpdateCalculation() {
    this.appService.updateCalculation.subscribe(({ update }) => {
      if (update) {
        this.initCalculation();
      }
    });
  }

  private defineAndSetAction() {
    if (this.currentAction !== 'random') {
      return;
    }
    const randomAction = this.appService.getRandomAction;
    this.appService.selectAction(randomAction);
    this.selectedAction = randomAction;
  }

  private getExpectedResult(numbres: number[]): number {
    switch (this.selectedAction) {
      case SelectedAction.plus: {
        return numbres.reduce((a, b) => a + b);
      }
      case SelectedAction.minus: {
        return numbres.reduce((a, b) => a - b);
      }
      case SelectedAction.multiply: {
        return numbres.reduce((a, b) => a * b);
      }
      case SelectedAction.divide: {
        return numbres.reduce((a, b) => a / b);
      }
    }
  }

  private setSelectedAction(action: SelectedAction) {
    this.currentAction = action;
    this.selectedAction = action;
    this.initCalculation();
  }

  private initResultForm() {
    this.resultForm = this.fb.group({
      result: null
    });
  }

  private generateRandomNumber(from: number, to: number) {
    return Math.abs(Math.floor(Math.random() * (to - from)) + from);
  }
}
