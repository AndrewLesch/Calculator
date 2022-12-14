import React, { Component } from 'react'
import { CalculatorWrapper, ButtonsWrapper, HistoryWrapper } from './components'
import { DisplayClass } from '@/components/Display'
import { HistoryClass } from '@/components/History'
import { KeypadClass } from '@/components/Keypad'
import { ControlPanelClass } from '@/components/ControlPanel'
import { toCalculate } from '@/utils/Calculator/calculatePolishWriteback'
import { checkBraces } from '@/utils/checkBraces'
import { CALCULATOR_VALUE_LS_KEY, HISTORY_LS_KEY } from '@/constants/localStorage'
import { getStartValue } from '@/utils/GetStartValue'
import { errors, operators } from '@/constants/calculator'
import { handleCalculatorValue } from '@/utils/handleCalculatorValue'

export class CalculatorContainerClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      calculatorValue: '',
      history: [],
      isHistoryVisible: false,
    }
  }

  componentDidMount() {
    this.setState(({
      ...this.state,
      calculatorValue: getStartValue(CALCULATOR_VALUE_LS_KEY),
      history: getStartValue(HISTORY_LS_KEY),
    }))
  }

  componentDidUpdate(prevState) {
    const { calculatorValue, history } = this.state

    if (prevState.calculatorValue !== calculatorValue) {
      localStorage.setItem(CALCULATOR_VALUE_LS_KEY, JSON.stringify(this.state.calculatorValue))
    }
    if (prevState.history !== history) {
      localStorage.setItem(HISTORY_LS_KEY, JSON.stringify(this.state.history))
    }
  }

  handleHistoryButtonClick = () => {
    this.setState(prevState => ({
      isHistoryVisible: !prevState.isHistoryVisible,
    }))
  }

  deleteHistory = () => {
    localStorage.setItem(HISTORY_LS_KEY, JSON.stringify([]))
    this.setState(({ ...this.state, history: [] }))
  }

  handleKeypadButtonClick = btnValue => {
    const { calculatorValue } = this.state

    switch (btnValue) {
      case '=': {
        const lastSymbol = calculatorValue.toString().slice(-1)

        if (operators.includes(lastSymbol)) {
          throw new Error(errors.invalidFormat)
        }
        if (!checkBraces(calculatorValue)) {
          throw new Error(errors.wrongBraces)
        }

        const value = toCalculate(calculatorValue)
        if (value === Infinity || isNaN(value)) {
          this.setState((({ ...this.state, calculatorValue: calculatorValue })))
          throw new Error(errors.divideByZero)
        } else {
          this.setState(({ history, calculatorValue }) => {
            return {
              history: [...history, calculatorValue],
              calculatorValue: toCalculate(calculatorValue),
            }
          })
        }
        break
      }

      case 'C': {
        this.setState((({ ...this.state, calculatorValue: calculatorValue.toString().slice(0, -1) })))
        break
      }

      case 'CE': {
        this.setState((({ ...this.state, calculatorValue: '' })))
        break
      }

      default: {
        this.setState((({ ...this.state, calculatorValue: handleCalculatorValue(calculatorValue, btnValue) })))
      }
    }
  }

  render() {
    const { calculatorValue, history, isHistoryVisible } = this.state

    return (
      <CalculatorWrapper>
        <ButtonsWrapper>
          <DisplayClass calculatorValue={calculatorValue} />
          <KeypadClass onKeypadButtonClick={this.handleKeypadButtonClick} />
        </ButtonsWrapper>
        <HistoryWrapper>
          <ControlPanelClass deleteHistory={this.deleteHistory} isHistoryVisible={isHistoryVisible}
            onHistoryButtonClick={this.handleHistoryButtonClick} />
          {isHistoryVisible && <HistoryClass history={history} />}
        </HistoryWrapper>
      </CalculatorWrapper >
    )
  }
}
