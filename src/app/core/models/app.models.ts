export interface Action {
  selectedAction: boolean;
  numbersRange?: {
    from: number;
    to: number;
  };
  icon?: any;
  quantityNumbers?: number;
}

export interface History {
  startDate: number;
  endDate: number;
  history: SubHistory[];
}

export interface SubHistory {
  result: string;
  expectedResult: string;
  question: any;
}

export enum SelectedAction {
  plus = 'plus',
  minus = 'minus',
  multiply = 'multiply',
  divide = 'divide',
  rendom = 'random'
}
