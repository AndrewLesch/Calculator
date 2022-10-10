import React, { useEffect, useState } from 'react'
import { CalculatorWrapper, ButtonsWrapper, HistoryWrapper } from './components'
import { DisplayFunctional } from '@/components/Display'
import { HistoryFunctional } from '@/components/History'
import { KeypadFunctional } from '@/components/Keypad'
import { ControlPanelFunctional } from '@/components/ControlPanel'
import { toCalculator } from '@/utils/Calculator/CalculatorClass'
import { checkBraces } from '@/utils/CheckBraces'
import { CALCULATOR_VALUE_LS_KEY, HISTORY_LS_KEY } from '@/constants/localStorage'
import { closeBrace, errors, numbers, openBrace, operators } from '@/constants/calculator'
import { getStartValue } from '@/utils/GetStartValue'
import { ErrorBoundary } from '@/components/Error'

export const CalculatorContainerFunctional = () => {
  const [calculatorValue, setCalculatorValue] = useState(getStartValue(CALCULATOR_VALUE_LS_KEY))
  const [history, setHistoryValue] = useState(getStartValue(HISTORY_LS_KEY))
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)

  useEffect(() => {
    setCalculatorValue(getStartValue(CALCULATOR_VALUE_LS_KEY))
    setHistoryValue(getStartValue(HISTORY_LS_KEY))
  }, [])

  useEffect(() => {
    localStorage.setItem(CALCULATOR_VALUE_LS_KEY, JSON.stringify(calculatorValue))
  }, [calculatorValue])

  useEffect(() => {
    localStorage.setItem(HISTORY_LS_KEY, JSON.stringify(history))
  }, [history])

  const onHistoryButtonClick = () => {
    setIsHistoryOpen(!isHistoryOpen)
  }

  const onKeypadButtonClick = btnValue => {
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
              setCalculatorValue(calculatorValue)
              throw new Error(errors.divideByZero)
            } else {
              setHistoryValue([...history, calculatorValue])
              setCalculatorValue(toCalculator(calculatorValue))
            }
          } else {
            throw new Error(errors.wrongBraces)
          }
        }
        break
      }

      case 'C': {
        setCalculatorValue(calculatorValue.toString().slice(0, -1))
        break
      }

      case 'CE': {
        setCalculatorValue('')
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

        if (btnValue === openBrace && !operators.includes(lastSymbol) && lastSymbol !== openBrace && value.length > 1) {
          value = `${calculatorValue}`.concat(`*${btnValue}`)
        }

        if (operators.includes(lastSymbol) && operators.includes(btnValue)) {
          value = `${calculatorValue}${btnValue}`.slice(0, -2).concat(btnValue)
          lastSymbol = ""
        }
        setCalculatorValue(value)
      }
    }
  }

  return (
    <ErrorBoundary>
      <CalculatorWrapper>
        <ButtonsWrapper>
          <DisplayFunctional calculatorValue={calculatorValue} />
          <KeypadFunctional onKeypadButtonClick={onKeypadButtonClick} />
        </ButtonsWrapper>
        <HistoryWrapper>
          <ControlPanelFunctional isHistoryOpen={isHistoryOpen} onHistoryButtonClick={onHistoryButtonClick}
            setHistory={setHistoryValue} />
          {isHistoryOpen && <HistoryFunctional history={history} />}
        </HistoryWrapper>
      </CalculatorWrapper>
    </ErrorBoundary>
  )
}
