import React from 'react'
import PropTypes from 'prop-types'
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

DisplayFC.PropTypes = {
  calculatorValue: PropTypes.string,
}