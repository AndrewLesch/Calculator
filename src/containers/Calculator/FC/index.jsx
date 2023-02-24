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
  } = useCalculatorValues();

  const onHistoryButtonClick = () => {
    setIsHistoryOpen(isHistoryOpen => !isHistoryOpen);
  };

  const onKeypadButtonClick = btnValue => {
    const returnedValues = onCalcButtonClick(
      isAnswer,
      calculatorValue,
      lastExpression,
      btnValue,
      history,
      isProCalcActive,
    );

    setCalculatorValue(returnedValues.calculatorValue);
    setHistory(returnedValues.history);
    setIsAnswer(returnedValues.isAnswer);
    setIsProCalcActive(returnedValues.isProCalcActive);
    setLastExpression(returnedValues.lastExpression);
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
          isHistoryOpen={isHistoryOpen}
          onHistoryButtonClick={onHistoryButtonClick}
          setHistory={setHistory}
        />
        {isHistoryOpen && <HistoryFC history={history} />}
      </HistoryWrapper>
    </CalculatorWrapper>
  );
}
