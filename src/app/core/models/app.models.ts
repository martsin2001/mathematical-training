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
  startDate: Date;
  endDate: Date;
  history: SubHistory[];
}

export interface SubHistory {
  result: string;
  expectedResult: string;
  question: number[];
  action: any;
}

export enum SelectedAction {
  plus = 'plus',
  minus = 'minus',
  multiply = 'multiply',
  divide = 'divide',
  rendom = 'random'
}
