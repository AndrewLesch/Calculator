export const keypadButtons = [
  'C',
  7,
  8,
  9,
  '(',
  ')',
  '+',
  4,
  5,
  6,
  '*',
  '+/-',
  '/',
  1,
  2,
  3,
  'CE',
  'pro',
  '-',
  0,
  '.',
  '=',
];
const proButtons = [
  '%',
  'e',
  '1/x',
  'sin',
  'cos',
  '|x|',
  'π',
  'x^2',
  'x^y',
  'e^x',
  'log',
  'tan',
  '√',
  'fac',
];
export const proKeypadButtons = keypadButtons.concat(proButtons);
export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const defaultOperators = [
  '+',
  '-',
  '*',
  '/',
  '%',
  '(',
  ')',
  'x^2',
  'x^y',
  '+/-',
];
export const operators = [
  '+',
  '-',
  '*',
  '/',
  '%',
  'sin',
  'cos',
  '|x|',
  'abs',
  '^',
  'log',
  'tan',
  '√',
  'fac',
  'x^2',
  'x^y',
];
export const errors = {
  divideByZero: 'Divide by zero',
  wrongBraces: 'Wrong braces',
  invalidFormat: 'Invalid format',
};
export const openBrace = '(';
export const closeBrace = ')';
export const operatorsPriority = {
  '(': 0,
  ')': 0,
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
  '%': 2,
  sin: 4,
  cos: 4,
  abs: 4,
  '^': 3,
  log: 4,
  tan: 4,
  '√': 3,
  fac: 4,
};
export const darkThemeKey = 'darkThemeKey';
export const lightThemeKey = 'lightThemeKey';
export const colorThemeKey = 'colorThemeKey';
