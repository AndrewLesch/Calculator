import React from 'react'
import propTypes from 'prop-types'
import { CalculatorDisplay } from './components'

export const DisplayFunctional = ({ calculatorValue }) => {
  return (
    <CalculatorDisplay>{calculatorValue}</CalculatorDisplay>
  )
}

DisplayFunctional.propTypes = {
  calculatorValue: propTypes.string,
}