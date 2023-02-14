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

  if (btnValue === 'fac') {
    value = `${calculatorValue}fac(`;
  }

  if (btnValue === '√') {
    value = `${calculatorValue}√(`;
  }

  if (btnValue === 'log') {
    value = `${calculatorValue}log(`;
  }

  if (btnValue === 'x^2') {
    if (calculatorValue.length === 0) {
      throw new Error(errors.invalidFormat);
    }
    value = `${calculatorValue}^2`;
  }

  if (btnValue === 'e^x') {
    value = `${calculatorValue}e^(`;
  }

  if (btnValue === 'x^y') {
    if (calculatorValue.length === 0) {
      throw new Error(errors.invalidFormat);
    }

    if (calculatorValue.length > 0 && !operators.includes(lastSymbol)) {
      value = `${calculatorValue}^(`;
    }

    if (calculatorValue.toString().slice(-2) === '^(') {
      value = value.slice(0, -2);
    }
  }

  if (btnValue === 'sin') {
    value = `${calculatorValue}sin(`;
  }

  if (btnValue === 'cos') {
    value = `${calculatorValue}cos(`;
  }

  if (btnValue === 'tan') {
    value = `${calculatorValue}tan(`;
  }

  if (
    btnValue === 'π'
    && (lastSymbol === 'π'
      || (numbers.includes(+lastSymbol) && calculatorValue.length !== 0))
  ) {
    value = `${calculatorValue}*π`;
  }

  if (lastSymbol === 'π' && !operators.includes(btnValue) && btnValue !== ')') {
    value = `${calculatorValue}*${btnValue}`;
  }

  if (
    btnValue === 'e'
    && (lastSymbol === 'e'
      || (numbers.includes(+lastSymbol) && calculatorValue.length !== 0))
  ) {
    value = `${calculatorValue}*e`;
  }

  if (lastSymbol === 'e' && btnValue !== ')' && !operators.includes(btnValue)) {
    value = `${calculatorValue}*${btnValue}`;
  }

  if (btnValue === '|x|') {
    value = `${calculatorValue}abs(`;
  }

  if (btnValue === '1/x') {
    if (calculatorValue.length !== 0 && numbers.includes(+lastSymbol)) {
      value = `${calculatorValue}*1/`;
    } else {
      value = `${calculatorValue}1/`;
    }
  }

  if (
    !operators.includes(lastSymbol)
    && btnValue === 'sin'
    && calculatorValue.length > 0
  ) {
    value = `${calculatorValue}*sin(`;
  }

  if (
    !operators.includes(lastSymbol)
    && btnValue === 'tan'
    && calculatorValue.length > 0
  ) {
    value = `${calculatorValue}*tan(`;
  }

  if (
    !operators.includes(lastSymbol)
    && btnValue === '|x|'
    && calculatorValue.length > 0
  ) {
    value = `${calculatorValue}*abs(`;
  }

  if (
    !operators.includes(lastSymbol)
    && btnValue === 'fac'
    && calculatorValue.length > 0
  ) {
    value = `${calculatorValue}*fac(`;
  }

  if (
    !operators.includes(lastSymbol)
    && btnValue === 'cos'
    && calculatorValue.length > 0
  ) {
    value = `${calculatorValue}*cos(`;
  }

  if (
    !operators.includes(lastSymbol)
    && btnValue === '√'
    && calculatorValue.length > 0
  ) {
    value = `${calculatorValue}*√(`;
  }

  if (
    btnValue === closeBrace
    && (operators.includes(lastSymbol) || lastSymbol === openBrace)
  ) {
    throw new Error(errors.invalidFormat);
  }

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

  if (
    operators.includes(lastSymbol)
    && (btnValue === '+'
      || btnValue === '-'
      || btnValue === '*'
      || btnValue === '/'
      || btnValue === '%')
  ) {
    value = `${calculatorValue}${btnValue}`.slice(0, -2).concat(btnValue);
    lastSymbol = '';
  }

  return value;
}
