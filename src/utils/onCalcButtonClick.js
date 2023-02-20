import { defaultOperators, errors, operators } from '@/constants/calculator';

import calculateState from './Calculator/calculateState';
import checkBracesIsValid from './checkBracesIsValid';
import handleCalcValue from './handleCalcValue';

export default function onCalcButtonClick(
  isAnswer,
  setIsAnswer,
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
        setCalculatorValue(errors.invalidFormat);
        throw new Error(errors.invalidFormat);
      }

      if (!checkBracesIsValid(calculatorValue)) {
        setCalculatorValue(errors.wrongBraces);
        throw new Error(errors.wrongBraces);
      }

      const value = calculateState(calculatorValue);

      if (value === Infinity || Number.isNaN(value)) {
        setCalculatorValue(errors.divideByZero);
        throw new Error(errors.divideByZero);
      } else {
        setLastExpression(calculatorValue);
        const mathAnswer = calculateState(calculatorValue);
        setCalculatorValue(mathAnswer);
        setHistory([...history, `${calculatorValue} = ${mathAnswer}`]);
        setIsAnswer(true);
      }
      break;
    }

    case 'C': {
      if (
        calculatorValue === errors.divideByZero
        || calculatorValue === errors.invalidFormat
        || calculatorValue === errors.wrongBraces
      ) {
        setCalculatorValue('');
      } else if (
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
      if (
        calculatorValue === errors.divideByZero
        || calculatorValue === errors.invalidFormat
        || calculatorValue === errors.wrongBraces
        || (isAnswer && !defaultOperators.includes(btnValue))
      ) {
        setCalculatorValue(handleCalcValue('', btnValue));
        setIsAnswer(false);
      } else {
        setCalculatorValue(handleCalcValue(calculatorValue, btnValue));
        setIsAnswer(false);
      }
    }
  }
}
