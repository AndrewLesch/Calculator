import React, { useEffect, useState } from 'react'

import { ControlPanelFC } from '@/components/ControlPanel/FC/Index'
import { DisplayFC } from '@/components/Display/FC/Index'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { HistoryFC } from '@/components/History/FC/Index'
import { KeypadFC } from '@/components/Keypad/FC/Index'
import { errors, operators } from '@/constants/calculator'
import { CALCULATOR_VALUE_LS_KEY, HISTORY_LS_KEY } from '@/constants/localStorage'
import { toCalculate } from '@/utils/Calculator/calculatePolishWriteBack'
import { checkBraces } from '@/utils/checkBraces'
import { getStartValue } from '@/utils/GetStartValue'
import { handleCalculatorValue } from '@/utils/handleCalculatorValue'

import { ButtonsWrapper, CalculatorWrapper, HistoryWrapper } from '../styled'

export const CalculatorContainerFC = () => {
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
          <DisplayFC calculatorValue={calculatorValue} />
          <KeypadFC onKeypadButtonClick={onKeypadButtonClick} />
        </ButtonsWrapper>
        <HistoryWrapper>
          <ControlPanelFC isHistoryVisible={isHistoryVisible} onHistoryButtonClick={onHistoryButtonClick}
            setHistory={setHistoryValue} />
          {isHistoryVisible && <HistoryFC history={history} />}
        </HistoryWrapper>
      </CalculatorWrapper>
    </ErrorBoundary>
  )
}
