import { useEffect, useState } from 'react';

import {
  CALCULATOR_VALUE_LS_KEY,
  HISTORY_LS_KEY,
} from '@/constants/localStorage';
import { getStartValue } from '@/utils';

export default function useCalculatorValues() {
  const [calculatorValue, setCalculatorValue] = useState('');
  const [history, setHistory] = useState([]);
  const [lastExpression, setLastExpression] = useState('');
  const [isHistoryVisible, setIsHistoryOpen] = useState(false);
  const [isProCalcActive, setIsProCalcActive] = useState(true);

  useEffect(() => {
    setCalculatorValue(getStartValue(CALCULATOR_VALUE_LS_KEY));
    setHistory(getStartValue(HISTORY_LS_KEY));
  }, []);

  useEffect(() => {
    localStorage.setItem(
      CALCULATOR_VALUE_LS_KEY,
      JSON.stringify(calculatorValue),
    );
  }, [calculatorValue]);

  useEffect(() => {
    localStorage.setItem(HISTORY_LS_KEY, JSON.stringify(history));
  }, [history]);

  return {
    calculatorValue,
    history,
    lastExpression,
    isHistoryVisible,
    isProCalcActive,
    setIsProCalcActive,
    setCalculatorValue,
    setHistory,
    setLastExpression,
    setIsHistoryOpen,
  };
}
