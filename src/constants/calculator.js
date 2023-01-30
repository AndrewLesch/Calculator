import { createContext } from 'react';

export const keypadButtons = [
  'C',
  7,
  8,
  9,
  '*',
  '-',
  4,
  5,
  6,
  '/',
  '+',
  1,
  2,
  3,
  '=',
  '.',
  '(',
  0,
  ')',
  'CE',
];
export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const operators = ['+', '-', '*', '/'];
export const errors = {
  divideByZero: 'Divide by zero',
  wrongBraces: 'Wrong braces',
  invalidFormat: 'Invalid format',
};
export const openBrace = '(';
export const closeBrace = ')';
export const operatorsPriority = {
  '+': 0,
  '-': 0,
  '*': 1,
  '/': 1,
};
export const numberDivider = '?';
export const darkThemeKey = 'darkThemeKey';
export const lightThemeKey = 'lightThemeKey';

export const ThemeContext = createContext({
  selectedThemeKey: lightThemeKey || darkThemeKey,
  handleThemeChange: () => {},
});
