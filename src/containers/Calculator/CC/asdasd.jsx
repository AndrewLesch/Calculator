import React, { Component } from 'react';

import ControlPanelCL from '@/components/ControlPanel/CC/asdasdasd';
import DisplayCL from '@/components/Display/CC/asdasd';
import HistoryCL from '@/components/History/CC/asdasd';
import KeypadCL from '@/components/Keypad/CC/asdasd';
import { errors, operators } from '@/constants/calculator';
import {
  CALCULATOR_VALUE_LS_KEY,
  HISTORY_LS_KEY,
} from '@/constants/localStorage';
import { checkBraces, getStartValue, handleCalculatorValue } from '@/utils';
import calculateState from '@/utils/Calculator/calculateState';

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
          this.setState(() => ({
            calculatorValue: errors.invalidFormat,
          }));
          throw new Error(errors.invalidFormat);
        }
        if (!checkBraces(calculatorValue)) {
          this.setState(() => ({
            calculatorValue: errors.wrongBraces,
          }));
          throw new Error(errors.wrongBraces);
        }

        const value = calculateState(calculatorValue);
        if (value === Infinity || Number.isNaN(value)) {
          this.setState(() => ({
            calculatorValue: errors.divideByZero,
          }));
          throw new Error(errors.divideByZero);
        } else {
          this.setState(({ history, calculatorValue }) => ({
            history: [...history, calculatorValue],
            lastExpression: calculatorValue,
            calculatorValue: calculateState(calculatorValue),
          }));
        }
        break;
      }

      case 'C': {
        if (
          calculatorValue === errors.divideByZero
          || calculatorValue === errors.invalidFormat
          || calculatorValue === errors.wrongBraces
        ) {
          this.setState(prevState => ({
            ...prevState,
            calculatorValue: '',
          }));
        } else if (
          calculatorValue.toString().slice(-4) === 'sin('
          || calculatorValue.toString().slice(-4) === 'cos('
          || calculatorValue.toString().slice(-4) === 'abs('
          || calculatorValue.toString().slice(-4) === 'fac('
          || calculatorValue.toString().slice(-4) === 'log('
          || calculatorValue.toString().slice(-4) === 'tan('
        ) {
          this.setState(prevState => ({
            ...prevState,
            calculatorValue: calculatorValue.toString().slice(0, -4),
          }));
        } else {
          this.setState(prevState => ({
            ...prevState,
            calculatorValue: calculatorValue.toString().slice(0, -1),
          }));
        }
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

      case 'pro': {
        this.setState(prevState => ({
          isProCalcActive: !prevState.isProCalcActive,
        }));
        break;
      }

      default: {
        if (
          calculatorValue === errors.divideByZero
          || calculatorValue === errors.invalidFormat
          || calculatorValue === errors.wrongBraces
        ) {
          this.setState(prevState => ({
            ...prevState,
            calculatorValue: handleCalculatorValue('', btnValue),
          }));
        } else {
          this.setState(prevState => ({
            ...prevState,
            calculatorValue: handleCalculatorValue(calculatorValue, btnValue),
          }));
        }
      }
    }
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
