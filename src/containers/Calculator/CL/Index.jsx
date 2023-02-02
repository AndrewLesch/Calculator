import React, { Component } from 'react';

import ControlPanelCL from '@/components/ControlPanel/CL/Index';
import DisplayCL from '@/components/Display/CL/Index';
import HistoryCL from '@/components/History/CL/Index';
import KeypadCL from '@/components/Keypad/CL/Index';
import { errors, operators } from '@/constants/calculator';
import {
  CALCULATOR_VALUE_LS_KEY,
  HISTORY_LS_KEY,
} from '@/constants/localStorage';
import { checkBraces, getStartValue, handleCalculatorValue } from '@/utils';
import { toCalculate } from '@/utils/Calculator/calculatePolishWriteBack';

import { ButtonsWrapper, CalculatorWrapper, HistoryWrapper } from '../styled';

export default class CalculatorContainerCL extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calculatorValue: '',
      history: [],
      lastExpression: '',
      isHistoryVisible: false,
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
    const { calculatorValue } = this.state;

    switch (btnValue) {
      case '=': {
        const lastSymbol = calculatorValue.toString().slice(-1);

        if (operators.includes(lastSymbol)) {
          throw new Error(errors.invalidFormat);
        }
        if (!checkBraces(calculatorValue)) {
          throw new Error(errors.wrongBraces);
        }

        const value = toCalculate(calculatorValue);
        if (value === Infinity || Number.isNaN(value)) {
          this.setState(prevState => ({
            ...prevState,
            calculatorValue,
          }));
          alert('На ноль делить нельзя');
          throw new Error(errors.divideByZero);
        } else {
          this.setState(({ history, calculatorValue }) => ({
            history: [...history, calculatorValue],
            lastExpression: calculatorValue,
            calculatorValue: toCalculate(calculatorValue),
          }));
        }
        break;
      }

      case 'C': {
        this.setState(prevState => ({
          ...prevState,
          calculatorValue: calculatorValue.toString().slice(0, -1),
        }));
        break;
      }

      case 'CE': {
        this.setState(prevState => ({
          ...prevState,
          calculatorValue: '',
          lastExpression: '',
        }));
        break;
      }

      default: {
        this.setState(prevState => ({
          ...prevState,
          calculatorValue: handleCalculatorValue(calculatorValue, btnValue),
        }));
      }
    }
  };

  render() {
    const {
      calculatorValue, history, lastExpression, isHistoryVisible,
    } = this.state;

    return (
      <CalculatorWrapper>
        <ButtonsWrapper>
          <DisplayCL
            calculatorValue={calculatorValue}
            lastExpression={lastExpression}
          />
          <KeypadCL onKeypadButtonClick={this.handleKeypadButtonClick} />
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
