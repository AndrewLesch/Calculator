import { numberDivider } from '@/constants';

import Calculator from './Calculator';
import AddCommand from './CalculatorCommands/AddCommand';
import DivideCommand from './CalculatorCommands/DivideCommand';
import MultiplyCommand from './CalculatorCommands/MultiplyCommand';
import SubtractCommand from './CalculatorCommands/SubtractCommand';
import toPolishWriteback from './toPolishWriteBack';

export function calculatePolishWriteback(statement) {
  let number = 0;
  let expression = '';

  const calculator = new Calculator();

  for (let i = 0; i < statement.length; i++) {
    if ((statement[i] <= '9' && statement[i] >= '0') || statement[i] === '.') {
      expression += statement[i];
    } else if (statement[i] === numberDivider) {
      number = +expression;
      calculator.pushValue(number);
      expression = '';
    } else {
      switch (statement[i]) {
        case '+':
          calculator.executeCommand(new AddCommand());
          break;
        case '-':
          calculator.executeCommand(new SubtractCommand());
          break;
        case '*':
          calculator.executeCommand(new MultiplyCommand());
          break;
        case '/':
          calculator.executeCommand(new DivideCommand());
          break;
        default:
      }
    }
  }
  return +calculator.getResult().toFixed(3);
}

export const toCalculate = value => calculatePolishWriteback(toPolishWriteback(value));
