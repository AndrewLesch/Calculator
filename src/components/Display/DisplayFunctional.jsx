import React from 'react'
import propTypes from 'prop-types'
import { CalculatorDisplay } from './components'

export const DisplayFunctional = ({ calculatorValue }) => (
  <CalculatorDisplay>{calculatorValue}</CalculatorDisplay>
)


DisplayFunctional.propTypes = {
  calculatorValue: propTypes.string,
}