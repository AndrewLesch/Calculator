import { errors, operators } from '@/constants/calculator';

import { toCalculate } from './Calculator/сalculatePolishWB';
import checkBracesIsValid from './checkBracesIsValid';
import handleCalcValue from './handleCalcValue';

export default function onButtonClick(
  calculatorValue,
  setCalculatorValue,
  setHistory,
  setLastExpression,
  btnValue,
  history,
) {
  switch (btnValue) {
    case '=': {
      const lastSymbol = calculatorValue.toString().slice(-1);

      if (operators.includes(lastSymbol)) {
        throw new Error(errors.invalidFormat);
      }

      if (!checkBracesIsValid(calculatorValue)) {
        throw new Error(errors.wrongBraces);
      }

      const value = toCalculate(calculatorValue);

      if (value === Infinity || Number.isNaN(value)) {
        setCalculatorValue(calculatorValue);
        alert('На ноль делить нельзя');
        throw new Error(errors.divideByZero);
      } else {
        setHistory([...history, calculatorValue]);
        setLastExpression(calculatorValue);
        setCalculatorValue(toCalculate(calculatorValue));
      }
      break;
    }

    case 'C': {
      setCalculatorValue(calculatorValue.toString().slice(0, -1));
      break;
    }

    case 'CE': {
      setCalculatorValue('');
      setLastExpression('');
      break;
    }

    default: {
      setCalculatorValue(handleCalcValue(calculatorValue, btnValue));
    }
  }
}
