import React from 'react'
import propTypes from 'prop-types'
import { CalculatorDisplay } from '../components'
import { errors } from '@/constants/calculatorConstants'

export const DisplayFC = ({ calculatorValue }) => {
  if (calculatorValue === 100) {
    throw new Error(errors.commonError)
  }

  return (
    <CalculatorDisplay>{calculatorValue}</CalculatorDisplay>
  )
}

DisplayFC.propTypes = {
  calculatorValue: propTypes.string,
}