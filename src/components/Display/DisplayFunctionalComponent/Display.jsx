import React from 'react'
import { CalculatorDisplay } from '../components'

export const DisplayFC = ({ calculatorValue }) => {

  return (
    <CalculatorDisplay>{calculatorValue}</CalculatorDisplay>
  )
}