import React, { useEffect, useState } from 'react'
import { CalculatorWrapper, ButtonsWrapper, HistoryWrapper } from './components'
import { DisplayFunctional } from '@/components/Display'
import { HistoryFunctional } from '@/components/History'
import { KeypadFunctional } from '@/components/Keypad'
import { ControlPanelFunctional } from '@/components/ControlPanel'
import { toCalculate } from '@/utils/Calculator/calculatePolishWriteback'
import { checkBraces } from '@/utils/checkBraces'
import { CALCULATOR_VALUE_LS_KEY, HISTORY_LS_KEY } from '@/constants/localStorage'
import { errors, operators } from '@/constants/calculator'
import { getStartValue } from '@/utils/GetStartValue'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { handleCalculatorValue } from '@/utils/handleCalculatorValue'

export const CalculatorContainerFunctional = () => {
  const [calculatorValue, setCalculatorValue] = useState('')
  const [history, setHistoryValue] = useState([])
  const [isHistoryVisible, setIsHistoryOpen] = useState(false)

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
    setIsHistoryOpen(!isHistoryVisible)
  }

  const onKeypadButtonClick = btnValue => {
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
          setCalculatorValue(calculatorValue)
          throw new Error(errors.divideByZero)
        } else {
          setHistoryValue([...history, calculatorValue])
          setCalculatorValue(toCalculate(calculatorValue))
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
        setCalculatorValue(handleCalculatorValue(calculatorValue, btnValue))
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
          <ControlPanelFunctional isHistoryOpen={isHistoryVisible} onHistoryButtonClick={onHistoryButtonClick}
            setHistory={setHistoryValue} />
          {isHistoryVisible && <HistoryFunctional history={history} />}
        </HistoryWrapper>
      </CalculatorWrapper>
    </ErrorBoundary>
  )
}
