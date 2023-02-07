import {
  closeBrace,
  errors,
  numbers,
  openBrace,
  operators,
} from '@/constants/calculator';

export default function handleCalcValue(calculatorValue, btnValue) {
  let value = `${calculatorValue}${btnValue}`;
  let lastSymbol = calculatorValue.toString().slice(-1);

  if (btnValue === '+/-') {
    const stringCalcValue = calculatorValue.toString();
    let lastOperatorIndex;
    const arr = [];
    for (let i = 0; i < calculatorValue.length; i++) {
      if (
        calculatorValue[i] === '-'
        || calculatorValue[i] === '+'
        || calculatorValue[i] === '/'
        || calculatorValue[i] === '*'
        || calculatorValue[i] === '%'
      ) {
        arr.push(i);
      }
      lastOperatorIndex = arr[arr.length - 1];
    }

    const lastBracetIndex = stringCalcValue.lastIndexOf('(-');
    const newCalculatorValue = [...stringCalcValue];

    if (
      stringCalcValue.includes('(-')
      && lastOperatorIndex - 2 < lastBracetIndex
    ) {
      newCalculatorValue.splice(lastOperatorIndex - 1, 2);
      value = newCalculatorValue.join('');
    } else {
      newCalculatorValue.splice(lastOperatorIndex + 1, 0, '(-');
      value = newCalculatorValue.join('');
    }
  }

  if (lastSymbol === '(' && (btnValue === '*' || btnValue === '/')) {
    value = value.slice(0, -1);
  }

  if (lastSymbol === '0' && numbers.includes(btnValue) && value.length <= 2) {
    value = btnValue;
  }

  if (lastSymbol === '0' && btnValue === 0 && value.length <= 2) {
    value = value.slice(0, -1);
  }

  if (lastSymbol === '.' && !numbers.includes(btnValue)) {
    value = value.slice(0, -1);
  }

  if (
    value.length === 1
    && (operators.includes(btnValue) || value === closeBrace)
  ) {
    value = '';
    throw new Error(errors.invalidFormat);
  }

  if (
    btnValue === openBrace
    && !operators.includes(lastSymbol)
    && lastSymbol !== openBrace
    && value.length > 1
  ) {
    value = `${calculatorValue}`.concat(`*${btnValue}`);
  }

  if (operators.includes(lastSymbol) && operators.includes(btnValue)) {
    value = `${calculatorValue}${btnValue}`.slice(0, -2).concat(btnValue);
    lastSymbol = '';
  }

  return value;
}
