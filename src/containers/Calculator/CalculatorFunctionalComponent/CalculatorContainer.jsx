import React, { useEffect, useState } from 'react'
import { CalculatorWrapper, LeftSideWrapper, RigthSideWrapper } from '../components'
import { DisplayFC } from '@/components/Display'
import { HistoryFC } from '@/components/History'
import { KeypadFC } from '@/components/Keypad'
import { ControlPanelFC } from '@/components/ControlPanel'
import { toCalculator } from '@/utils/Calculator'
import { checkBracets } from '@/utils/CheckBracets'
import { CALCULATOR_VALUE_LS_KEY, HISTORY_VALUE_LS_KEY } from '@/constants/localStorage'
import { ERRORS, openBracet, operators } from '@/constants/calculatorConstants'
import { getStartValue } from '@/utils/getStartValue'
import { ErrorBoundary } from '@/components/Error'

export const CalculatorContainerFC = () => {
  // get number 100 in calculator to test Error Boundary working
  const [calculatorValue, setCalculatorValue] = useState(getStartValue(CALCULATOR_VALUE_LS_KEY))
  const [history, setHistoryValue] = useState(getStartValue(HISTORY_VALUE_LS_KEY))
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)

  useEffect(() => {
    setCalculatorValue(getStartValue(CALCULATOR_VALUE_LS_KEY))
    setHistoryValue(getStartValue(HISTORY_VALUE_LS_KEY))
  }, [])

  useEffect(() => {
    localStorage.setItem(CALCULATOR_VALUE_LS_KEY, JSON.stringify(calculatorValue))
  }, [calculatorValue])

  useEffect(() => {
    localStorage.setItem(HISTORY_VALUE_LS_KEY, JSON.stringify(history))
  }, [history])

  const onHistoryButtonClick = () => {
    setIsHistoryOpen(!isHistoryOpen)
  }

  const onKeypadButtonClick = btnValue => {
    switch (btnValue) {
      case "=": {
        const lastSymbol = calculatorValue.toString().slice(-1)

        if (operators.includes(lastSymbol)) {
          throw new Error(ERRORS.invalidFormat)
        } else {
          const isOkey = checkBracets(calculatorValue)
          
          if (isOkey) {
            const value = toCalculator(calculatorValue)
            if (value === Infinity) {
              setCalculatorValue(calculatorValue)
              throw new Error(ERRORS.devideByZero)
            } else {
              setHistoryValue([...history, calculatorValue])
              setCalculatorValue(toCalculator(calculatorValue))
            }
          } else {
            throw new Error(ERRORS.whongBracets)
          }
        }
        break
      }

      case "C": {
        setCalculatorValue(calculatorValue.toString().slice(0, -1))
        break
      }

      case "CE": {
        setCalculatorValue("")
        break
      }
      default: {
        let value = `${calculatorValue}${btnValue}`
        let lastSymbol = calculatorValue.toString().slice(-1)

        if (btnValue === openBracet && !operators.includes(lastSymbol) && lastSymbol !== openBracet) {
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
        <LeftSideWrapper>
          <DisplayFC calculatorValue={calculatorValue} />
          <KeypadFC onKeypadButtonClick={onKeypadButtonClick} />
        </LeftSideWrapper>
        <RigthSideWrapper>
          <ControlPanelFC isHistoryOpen={isHistoryOpen} onHistoryButtonClick={onHistoryButtonClick}
            setHistory={setHistoryValue} />
          {isHistoryOpen && <HistoryFC history={history} />}
        </RigthSideWrapper>
      </CalculatorWrapper>
    </ErrorBoundary>
  )
}
