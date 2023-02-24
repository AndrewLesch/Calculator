import React, { Component } from 'react';

import ControlPanelCL from '@/components/ControlPanel/CC';
import DisplayCL from '@/components/Display/CC';
import HistoryCL from '@/components/History/CC';
import KeypadCL from '@/components/Keypad/CC';
import {
  CALCULATOR_VALUE_LS_KEY,
  HISTORY_LS_KEY,
} from '@/constants/localStorage';
import { getStartValue } from '@/utils';
import onCalcButtonClick from '@/utils/onCalcButtonClick';

import { ButtonsWrapper, CalculatorWrapper, HistoryWrapper } from '../styled';

export default class CalculatorContainerCL extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calculatorValue: '',
      history: [],
      lastExpression: '',
      isHistoryVisible: false,
      isProCalcActive: true,
      isAnswer: false,
    };
  }

  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
      calculatorValue: getStartValue(CALCULATOR_VALUE_LS_KEY),
      history: getStartValue(HISTORY_LS_KEY),
    }));
  }

  componentDidUpdate(prevState) {
    const { calculatorValue, history } = this.state;

    if (prevState.calculatorValue !== calculatorValue) {
      localStorage.setItem(
        CALCULATOR_VALUE_LS_KEY,
        JSON.stringify(calculatorValue),
      );
    }
    if (prevState.history !== history) {
      localStorage.setItem(HISTORY_LS_KEY, JSON.stringify(history));
    }
  }

  handleHistoryButtonClick = () => {
    this.setState(prevState => ({
      isHistoryVisible: !prevState.isHistoryVisible,
    }));
  };

  deleteHistory = () => {
    localStorage.setItem(HISTORY_LS_KEY, JSON.stringify([]));
    this.setState(prevState => ({ ...prevState, history: [] }));
  };

  handleKeypadButtonClick = btnValue => {
    const {
      calculatorValue, isAnswer, history, isProCalcActive, lastExpression,
    } = this.state;

    const returnedValues = onCalcButtonClick(
      isAnswer,
      calculatorValue,
      lastExpression,
      btnValue,
      history,
      isProCalcActive,
    );

    this.setState(() => ({
      history: returnedValues.history,
      lastExpression: returnedValues.lastExpression,
      calculatorValue: returnedValues.calculatorValue,
      isAnswer: returnedValues.isAnswer,
      isProCalcActive: returnedValues.isProCalcActive,
    }));
  };

  render() {
    const {
      calculatorValue,
      history,
      lastExpression,
      isHistoryVisible,
      isProCalcActive,
    } = this.state;

    return (
      <CalculatorWrapper>
        <ButtonsWrapper>
          <DisplayCL
            calculatorValue={calculatorValue}
            lastExpression={lastExpression}
          />
          <KeypadCL
            onKeypadButtonClick={this.handleKeypadButtonClick}
            isProCalcActive={isProCalcActive}
          />
        </ButtonsWrapper>
        <HistoryWrapper>
          <ControlPanelCL
            deleteHistory={this.deleteHistory}
            isHistoryVisible={isHistoryVisible}
            onHistoryButtonClick={this.handleHistoryButtonClick}
          />
          {isHistoryVisible && <HistoryCL history={history} />}
        </HistoryWrapper>
      </CalculatorWrapper>
    );
  }
}
