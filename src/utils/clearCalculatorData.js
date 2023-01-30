import {
  CALCULATOR_VALUE_LS_KEY,
  HISTORY_LS_KEY,
} from '@/constants/localStorage';

export default function clearCalculatorData() {
  localStorage.setItem(HISTORY_LS_KEY, JSON.stringify([]));
  localStorage.setItem(CALCULATOR_VALUE_LS_KEY, JSON.stringify(''));
}
