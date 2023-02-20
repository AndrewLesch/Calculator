import React from 'react';

import ControlPanelFC from '@/components/ControlPanel/FC';
import DisplayFC from '@/components/Display/FC';
import HistoryFC from '@/components/History/FC';
import KeypadFC from '@/components/Keypad/FC';
import useCalculatorValues from '@/hooks/useCalculatorValues';
import onCalcButtonClick from '@/utils/onCalcButtonClick';

import { ButtonsWrapper, CalculatorWrapper, HistoryWrapper } from '../styled';

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
    setIsHistoryOpen(() => !isHistoryVisible);
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
  );
}
