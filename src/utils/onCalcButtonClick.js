import { errors, operators } from '@/constants/calculator';

import calculateState from './Calculator/calculateState';
import checkBracesIsValid from './checkBracesIsValid';
import handleCalcValue from './handleCalcValue';

export default function onCalcButtonClick(
  calculatorValue,
  setCalculatorValue,
  setHistory,
  setLastExpression,
  btnValue,
  history,
  setIsProCalcActive,
  isProCalcActive,
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

      const value = calculateState(calculatorValue);

      if (value === Infinity || Number.isNaN(value)) {
        setCalculatorValue(calculatorValue);
        alert('На ноль делить нельзя');
        throw new Error(errors.divideByZero);
      } else {
        setHistory([...history, calculatorValue]);
        setLastExpression(calculatorValue);
        setCalculatorValue(calculateState(calculatorValue));
      }
      break;
    }

    case 'C': {
      if (
        calculatorValue.toString().slice(-4) === 'sin('
        || calculatorValue.toString().slice(-4) === 'cos('
        || calculatorValue.toString().slice(-4) === 'abs('
        || calculatorValue.toString().slice(-4) === 'fac('
        || calculatorValue.toString().slice(-4) === 'log('
        || calculatorValue.toString().slice(-4) === 'tan('
      ) {
        setCalculatorValue(calculatorValue.toString().slice(0, -4));
      } else {
        setCalculatorValue(calculatorValue.toString().slice(0, -1));
      }
      break;
    }

    case 'CE': {
      setCalculatorValue('');
      setLastExpression('');
      break;
    }

    case 'pro': {
      setIsProCalcActive(!isProCalcActive);
      break;
    }

    default: {
      setCalculatorValue(handleCalcValue(calculatorValue, btnValue));
    }
  }
}
