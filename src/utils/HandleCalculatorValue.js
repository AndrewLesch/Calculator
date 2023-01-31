import {
  closeBrace,
  errors,
  numbers,
  openBrace,
  operators,
} from '@/constants/calculator';

export default function handleCalculatorValue(calculatorValue, btnValue) {
  let value = `${calculatorValue}${btnValue}`;
  let lastSymbol = calculatorValue.toString().slice(-1);

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
