import propTypes from 'prop-types'
import React from 'react'

import { CalculatorDisplay } from '../styled'

export const DisplayFC = ({ calculatorValue }) => (
  <CalculatorDisplay>{calculatorValue}</CalculatorDisplay>
)

DisplayFC.propTypes = {
  calculatorValue: propTypes.string,
}