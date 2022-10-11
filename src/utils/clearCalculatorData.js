import { HISTORY_LS_KEY, CALCULATOR_VALUE_LS_KEY } from '@/constants/localStorage'

export const clearCalculatorData = () => {
  localStorage.setItem(HISTORY_LS_KEY, JSON.stringify([]))
  localStorage.setItem(CALCULATOR_VALUE_LS_KEY, JSON.stringify(''))
}