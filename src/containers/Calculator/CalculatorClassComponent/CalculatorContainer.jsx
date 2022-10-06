import React, { Component } from 'react'
import { CalculatorWrapper, LeftSideWrapper, RigthSideWrapper } from '../components'
import { DisplayCL } from '@/components/Display'
import { HistoryCL } from '@/components/History'
import { KeypadCL } from '@/components/Keypad'
import { ControlPanelCL } from '@/components/ControlPanel'
import { toCalculator } from '@/utils/Calculator'
import { checkBracets } from '@/utils/CheckBracets'
import { CALCULATOR_VALUE_LS_KEY, HISTORY_VALUE_LS_KEY } from '@/constants/localStorage'
import { getStartValue } from '@/utils/getStartValue'
import { operators } from '@/constants/calculatorConstants'

export class CalculatorContainerCL extends Component {
  constructor(props) {
    super(props)

    this.state = {
      calculatorValue: getStartValue(CALCULATOR_VALUE_LS_KEY),
      history: getStartValue(HISTORY_VALUE_LS_KEY),
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
      localStorage.setItem(HISTORY_VALUE_LS_KEY, JSON.stringify(this.state.history))
    }
  }

  handleHistoryButtonClick = () => {
    this.setState(prevState => ({
      isHistoryOpen: !prevState.isHistoryOpen,
    }))
  }

  deleteHistory = () => {
    localStorage.setItem(HISTORY_VALUE_LS_KEY, [])
    this.setState(({ history }) => {
      return {
        history: [],
      }
    })
  }

  handleKeypadButtonClick = btnValue => {
    const { calculatorValue } = this.state

    switch (btnValue) {
      case "=": {
        const lastSymbol = calculatorValue.toString().slice(-1)
        if (operators.includes(lastSymbol)) {
          alert("eror")
        } else {
          const isOkey = checkBracets(calculatorValue)
          if (isOkey) {
            const value = toCalculator(calculatorValue)
            if (value === Infinity) {

              this.setState(({ calculatorValue }) => {
                return {
                  calculatorValue: calculatorValue,
                }
              })
              
            } else {
              this.setState(({ history, calculatorValue }) => {
                return {
                  history: [...history, calculatorValue],
                  calculatorValue: toCalculator(calculatorValue),
                }

              })
            }
          } else {
            
          }
        }
        break
      }

      case "C": {
        this.setState(({ calculatorValue }) => {
          return {
            calculatorValue: calculatorValue.toString().slice(0, -1),
          }
        })
        break
      }

      case "CE": {
        this.setState(({ calculatorValue }) => {
          return {
            calculatorValue: "",
          }
        })
        break
      }
      default: {
        let value = `${calculatorValue}${btnValue}`
        let lastSymbol = calculatorValue.toString().slice(-1)
        if (operators.includes(lastSymbol) && operators.includes(btnValue) && lastSymbol !== "(") {
          value = `${calculatorValue}${btnValue}`.slice(0, -2).concat(btnValue)
          lastSymbol = ""
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
        <LeftSideWrapper>
          <DisplayCL calculatorValue={calculatorValue} />
          <KeypadCL onKeypadButtonClick={this.handleKeypadButtonClick} />
        </LeftSideWrapper>
        <RigthSideWrapper>
          <ControlPanelCL deleteHistory={this.deleteHistory} isHistoryOpen={isHistoryOpen}
            onHistoryButtonClick={this.handleHistoryButtonClick} />
          {isHistoryOpen && <HistoryCL history={history} />}
        </RigthSideWrapper>
      </CalculatorWrapper >
    )
  }
}
