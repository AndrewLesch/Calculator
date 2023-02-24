import { defaultOperators, errors, operators } from '@/constants/calculator';

import calculateState from './Calculator/calculateState';
import checkBracesIsValid from './checkBracesIsValid';
import handleCalcValue from './handleCalcValue';

export default function onCalcButtonClick(
  isAnswer,
  calculatorValue,
  lastExpression,
  btnValue,
  history,
  isProCalcActive,
) {
  const calculatorParams = {
    isAnswer,
    calculatorValue,
    lastExpression,
    btnValue,
    history,
    isProCalcActive,
  };
  switch (btnValue) {
    case '=': {
      const lastSymbol = calculatorValue.toString().slice(-1);

      if (operators.includes(lastSymbol)) {
        calculatorParams.calculatorValue = errors.invalidFormat;
        return calculatorParams;
      }

      if (!checkBracesIsValid(calculatorValue)) {
        calculatorParams.calculatorValue = errors.wrongBraces;
        return calculatorParams;
      }

      const value = calculateState(calculatorValue);

      if (value === Infinity || Number.isNaN(value)) {
        calculatorParams.calculatorValue = errors.divideByZero;
        return calculatorParams;
      }

      calculatorParams.lastExpression = calculatorValue;
      const mathAnswer = calculateState(calculatorValue);
      calculatorParams.calculatorValue = mathAnswer;
      calculatorParams.history = [
        ...history,
        `${calculatorValue} = ${mathAnswer}`,
      ];
      calculatorParams.isAnswer = true;
      return calculatorParams;
    }

    case 'C': {
      if (
        calculatorValue === errors.divideByZero
        || calculatorValue === errors.invalidFormat
        || calculatorValue === errors.wrongBraces
      ) {
        calculatorParams.calculatorValue = '';
        return calculatorParams;
      }
      if (
        calculatorValue.toString().slice(-4) === 'sin('
        || calculatorValue.toString().slice(-4) === 'cos('
        || calculatorValue.toString().slice(-4) === 'abs('
        || calculatorValue.toString().slice(-4) === 'fac('
        || calculatorValue.toString().slice(-4) === 'log('
        || calculatorValue.toString().slice(-4) === 'tan('
      ) {
        calculatorParams.calculatorValue = calculatorValue
          .toString()
          .slice(0, -4);
        return calculatorParams;
      }
      calculatorParams.calculatorValue = calculatorValue.toString().slice(0, -1);
      return calculatorParams;
    }

    case 'CE': {
      calculatorParams.calculatorValue = '';
      calculatorParams.lastExpression = '';
      return calculatorParams;
    }

    case 'pro': {
      calculatorParams.isProCalcActive = !calculatorParams.isProCalcActive;
      return calculatorParams;
    }

    default: {
      if (
        calculatorValue === errors.divideByZero
        || calculatorValue === errors.invalidFormat
        || calculatorValue === errors.wrongBraces
        || (isAnswer && !defaultOperators.includes(btnValue))
      ) {
        calculatorParams.calculatorValue = handleCalcValue('', btnValue);
        calculatorParams.isAnswer = false;
        return calculatorParams;
      }
      calculatorParams.calculatorValue = handleCalcValue(
        calculatorValue,
        btnValue,
      );
      calculatorParams.isAnswer = false;
      return calculatorParams;
    }
  }
}
