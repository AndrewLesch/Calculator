import React from 'react';

import ControlPanelFC from '@/components/ControlPanel/FC/Index';
import DisplayFC from '@/components/Display/FC/Index';
import ErrorBoundary from '@/components/ErrorBoundary/Index';
import HistoryFC from '@/components/History/FC/Index';
import KeypadFC from '@/components/Keypad/FC/Index';
import onButtonClick from '@/utils/onButtonClick';

import { ButtonsWrapper, CalculatorWrapper, HistoryWrapper } from '../styled';
import useCalculatorValues from './hook/useCalculatorValues';

export default function CalculatorContainerFC() {
  const {
    calculatorValue,
    history,
    lastExpression,
    isHistoryVisible,
    setCalculatorValue,
    setHistory,
    setLastExpression,
    setIsHistoryOpen,
  } = useCalculatorValues();
  const onHistoryButtonClick = () => {
    setIsHistoryOpen(!isHistoryVisible);
  };

  const onKeypadButtonClick = btnValue => {
    onButtonClick(
      calculatorValue,
      setCalculatorValue,
      setHistory,
      setLastExpression,
      btnValue,
      history,
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

          <KeypadFC onKeypadButtonClick={onKeypadButtonClick} />
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
