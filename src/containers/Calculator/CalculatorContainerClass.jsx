import React, { Component } from 'react'
import { CalculatorWrapper, ButtonsWrapper, HistoryWrapper } from './components'
import { DisplayClass } from '@/components/Display'
import { HistoryClass } from '@/components/History'
import { KeypadClass } from '@/components/Keypad'
import { ControlPanelClass } from '@/components/ControlPanel'
import { toCalculator } from '@/utils/Calculator/CalculatorClass'
import { checkBraces } from '@/utils/CheckBraces'
import { CALCULATOR_VALUE_LS_KEY, HISTORY_LS_KEY } from '@/constants/localStorage'
import { getStartValue } from '@/utils/GetStartValue'
import { errors, operators, openBrace, closeBrace, numbers } from '@/constants/calculator'

export class CalculatorContainerClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      calculatorValue: getStartValue(CALCULATOR_VALUE_LS_KEY),
      history: getStartValue(HISTORY_LS_KEY),
      isHistoryOpen: false,
    }
  }

  componentDidMount() {
    this.setState(({ calculatorValue }) => {
      return {
        calculatorValue: getStartValue(CALCULATOR_VALUE_LS_KEY),
      }
    })
  }

  componentDidUpdate(prevState) {
    const { calculatorValue, history } = this.state

    if (prevState.calculatorValue !== calculatorValue) {
      localStorage.setItem(CALCULATOR_VALUE_LS_KEY, this.state.calculatorValue)
    }

    if (prevState.history !== history) {
      localStorage.setItem(HISTORY_LS_KEY, JSON.stringify(this.state.history))
    }
  }

  handleHistoryButtonClick = () => {
    this.setState(prevState => ({
      isHistoryOpen: !prevState.isHistoryOpen,
    }))
  }

  deleteHistory = () => {
    localStorage.setItem(HISTORY_LS_KEY, [])
    this.setState(({ history }) => {
      return {
        history: [],
      }
    })
  }

  handleKeypadButtonClick = btnValue => {
    const { calculatorValue } = this.state

    switch (btnValue) {
      case '=': {
        const lastSymbol = calculatorValue.toString().slice(-1)

        if (operators.includes(lastSymbol)) {
          throw new Error(errors.invalidFormat)
        } else {
          const isOkey = checkBraces(calculatorValue)

          if (isOkey) {
            const value = toCalculator(calculatorValue)
            if (value === Infinity || isNaN(value)) {
              this.setState(({ calculatorValue }) => {
                return {
                  calculatorValue: calculatorValue,
                }
              })
              throw new Error(errors.divideByZero)
            } else {
              this.setState(({ history, calculatorValue }) => {
                return {
                  history: [...history, calculatorValue],
                  calculatorValue: toCalculator(calculatorValue),
                }

              })
            }
          } else {
            throw new Error(errors.wrongBracets)
          }
        }
        break
      }

      case 'C': {
        this.setState(({ calculatorValue }) => {
          return {
            calculatorValue: calculatorValue.toString().slice(0, -1),
          }
        })
        break
      }

      case 'CE': {
        this.setState(({ calculatorValue }) => {
          return {
            calculatorValue: '',
          }
        })
        break
      }
      default: {
        let value = `${calculatorValue}${btnValue}`
        let lastSymbol = calculatorValue.toString().slice(-1)

        if (lastSymbol === '.' && !numbers.includes(btnValue)) {
          value = value.slice(0, -1)
        }

        if (value.length === 1 && (operators.includes(btnValue) || value === closeBrace)) {
          value = ''
          throw new Error(errors.invalidFormat)
        }

        if (btnValue === openBrace && !operators.includes(lastSymbol) && lastSymbol !== openBrace) {
          value = `${calculatorValue}`.concat(`*${btnValue}`)
        }

        if (operators.includes(lastSymbol) && operators.includes(btnValue)) {
          value = `${calculatorValue}${btnValue}`.slice(0, -2).concat(btnValue)
          lastSymbol = ''
        }

        this.setState(({ calculatorValue }) => {
          return {
            calculatorValue: value,
          }
        })
      }
    }
  }

  render() {
    const { calculatorValue, history, isHistoryOpen } = this.state

    return (
      <CalculatorWrapper>
        <ButtonsWrapper>
          <DisplayClass calculatorValue={calculatorValue} />
          <KeypadClass onKeypadButtonClick={this.handleKeypadButtonClick} />
        </ButtonsWrapper>
        <HistoryWrapper>
          <ControlPanelClass deleteHistory={this.deleteHistory} isHistoryOpen={isHistoryOpen}
            onHistoryButtonClick={this.handleHistoryButtonClick} />
          {isHistoryOpen && <HistoryClass history={history} />}
        </HistoryWrapper>
      </CalculatorWrapper >
    )
  }
}
