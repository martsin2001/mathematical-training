export interface Action {
  selectedAction: boolean;
  numbersRange?: {
    from: number;
    to: number;
  };
  icon?: any;
  quantityNumbers?: number;
}

export enum SelectedAction {
  plus = 'plus',
  minus = 'minus',
  multiply = 'multiply',
  divide = 'divide',
  rendom = 'random'
}
