import React from 'react'
import { CalculatorDisplay } from '../components'
import { ERRORS } from '@/constants/calculatorConstants'

export const DisplayFC = ({ calculatorValue }) => {

  if (calculatorValue === 100) {
    throw new Error(ERRORS.testErrorBoundary)
  }

  return (
    <CalculatorDisplay>{calculatorValue}</CalculatorDisplay>
  )
}