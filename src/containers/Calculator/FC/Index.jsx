import React from 'react';

import ControlPanelFC from '@/components/ControlPanel/FC';
import DisplayFC from '@/components/Display/FC';
import ErrorBoundary from '@/components/ErrorBoundary';
import HistoryFC from '@/components/History/FC';
import KeypadFC from '@/components/Keypad/FC';
import onCalcButtonClick from '@/utils/onCalcButtonClick';

import { ButtonsWrapper, CalculatorWrapper, HistoryWrapper } from '../styled';

import useCalculatorValues from './hooks/useCalculatorValues';

export default function CalculatorContainerFC() {
  const {
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
  } = useCalculatorValues();

  const onHistoryButtonClick = () => {
    setIsHistoryOpen(!isHistoryVisible);
  };

  const onKeypadButtonClick = btnValue => {
    onCalcButtonClick(
      calculatorValue,
      setCalculatorValue,
      setHistory,
      setLastExpression,
      btnValue,
      history,
      setIsProCalcActive,
      isProCalcActive,
    );
  };

  return (
    <ErrorBoundary>
      <CalculatorWrapper>
        <ButtonsWrapper>
          <DisplayFC
            calculatorValue={calculatorValue}
            lastExpression={lastExpression}
          />

          <KeypadFC
            onKeypadButtonClick={onKeypadButtonClick}
            isProCalcActive={isProCalcActive}
          />
        </ButtonsWrapper>
        <HistoryWrapper>
          <ControlPanelFC
            isHistoryVisible={isHistoryVisible}
            onHistoryButtonClick={onHistoryButtonClick}
            setHistory={setHistory}
          />
          {isHistoryVisible && <HistoryFC history={history} />}
        </HistoryWrapper>
      </CalculatorWrapper>
    </ErrorBoundary>
  );
}
