import { useEffect, useLayoutEffect, useState } from 'react';

import {
  CALCULATOR_VALUE_LS_KEY,
  HISTORY_LS_KEY,
} from '@/constants/localStorage';
import { getStartValue } from '@/utils';

export default function useCalculatorValues() {
  const [isAnswer, setIsAnswer] = useState(false);
  const [calculatorValue, setCalculatorValue] = useState('');
  const [history, setHistory] = useState([]);
  const [lastExpression, setLastExpression] = useState('');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isProCalcActive, setIsProCalcActive] = useState(true);

  useLayoutEffect(() => {
    setCalculatorValue(getStartValue(CALCULATOR_VALUE_LS_KEY));
    setHistory(getStartValue(HISTORY_LS_KEY));
  }, []);

  useEffect(() => {
    localStorage.setItem(
      CALCULATOR_VALUE_LS_KEY,
      JSON.stringify(calculatorValue),
    );
    localStorage.setItem(HISTORY_LS_KEY, JSON.stringify(history));
  }, [calculatorValue, history]);

  return {
    isAnswer,
    calculatorValue,
    history,
    lastExpression,
    isHistoryOpen,
    isProCalcActive,
    setIsAnswer,
    setIsProCalcActive,
    setCalculatorValue,
    setHistory,
    setLastExpression,
    setIsHistoryOpen,
  };
}
