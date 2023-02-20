import React from 'react';

import ControlPanelFC from '@/components/ControlPanel/FC/asdasd';
import DisplayFC from '@/components/Display/FC/sadasd';
import HistoryFC from '@/components/History/FC/asdasd';
import KeypadFC from '@/components/Keypad/FC/asdadsasd';
import useCalculatorValues from '@/hooks/useCalculatorValues';
import onCalcButtonClick from '@/utils/onCalcButtonClick';

import { ButtonsWrapper, CalculatorWrapper, HistoryWrapper } from '../styled';

export default function CalculatorContainerFC() {
  const {
    calculatorValue,
    history,
    lastExpression,
    isHistoryOpen,
    isProCalcActive,
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
          isHistoryOpen={isHistoryOpen}
          onHistoryButtonClick={onHistoryButtonClick}
          setHistory={setHistory}
        />
        {isHistoryOpen && <HistoryFC history={history} />}
      </HistoryWrapper>
    </CalculatorWrapper>
  );
}
