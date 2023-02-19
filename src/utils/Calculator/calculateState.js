import {
  closeBrace,
  openBrace,
  operatorsPriority,
} from '@/constants/calculator';

import InvokerCalculator from './InvokerCalculator';

const numbersValue = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '.',
  'e',
  'π',
];

export default function calculateState(statement) {
  const numbersStack = [];
  const operatorsStack = [];
  let numbersResult = '';
  let longOperator = '';

  const invokerCalculator = new InvokerCalculator();

  for (let i = 0; i < statement.length; i++) {
    const char = statement.charAt(i);

    if (numbersValue.indexOf(char) >= 0) {
      if (char === 'e') {
        numbersResult += 2.71;
      } else if (char === 'π') {
        numbersResult += 3.14;
      } else {
        numbersResult += char;
      }
    } else if (
      operatorsPriority[char] >= 0
      && char !== openBrace
      && char !== closeBrace
    ) {
      if (numbersResult !== '') {
        numbersStack.push(+numbersResult);
        numbersResult = '';
      }
      if (
        i === 0
        || (operatorsPriority[statement.charAt(i - 1)] >= 0
          && statement.charAt(i - 1) !== closeBrace)
      ) {
        numbersStack.push(0);
      }
      let signInStack = operatorsStack.pop();
      while (operatorsPriority[signInStack] >= operatorsPriority[char]) {
        if (operatorsPriority[signInStack] <= 3) {
          numbersStack.push(
            invokerCalculator.invokeCommand(
              signInStack,
              numbersStack.pop(),
              numbersStack.pop(),
            ),
          );
        } else {
          numbersStack.push(
            invokerCalculator.invokeCommand(signInStack, numbersStack.pop()),
          );
        }
        signInStack = operatorsStack.pop();
      }
      operatorsStack.push(signInStack);
      operatorsStack.push(char);
    } else if (char === closeBrace) {
      if (numbersResult !== '') {
        numbersStack.push(+numbersResult);
        numbersResult = '';
      }
      let operatorFromStack = operatorsStack.pop();
      while (operatorFromStack !== openBrace) {
        if (operatorsPriority[operatorFromStack] <= 3) {
          numbersStack.push(
            invokerCalculator.invokeCommand(
              operatorFromStack,
              numbersStack.pop(),
              numbersStack.pop(),
            ),
          );
        } else {
          numbersStack.push(
            invokerCalculator.invokeCommand(
              operatorFromStack,
              numbersStack.pop(),
            ),
          );
        }
        operatorFromStack = operatorsStack.pop();
      }
      if (longOperator !== '') {
        operatorsStack.push(longOperator);
        longOperator = '';
      }
    } else if (char === openBrace) {
      if (longOperator !== '') {
        operatorsStack.push(longOperator);
        longOperator = '';
      }
      operatorsStack.push(char);
    } else {
      longOperator += char;
    }
  }

  if (numbersResult !== '') {
    numbersStack.push(+numbersResult);
  }

  let operatorFromStack = operatorsStack.pop();
  while (operatorFromStack) {
    if (operatorsPriority[operatorFromStack] <= 3) {
      numbersStack.push(
        invokerCalculator.invokeCommand(
          operatorFromStack,
          numbersStack.pop(),
          numbersStack.pop(),
        ),
      );
    } else {
      numbersStack.push(
        invokerCalculator.invokeCommand(operatorFromStack, numbersStack.pop()),
      );
    }
    operatorFromStack = operatorsStack.pop();
  }

  return +numbersStack.pop().toFixed(3);
}
