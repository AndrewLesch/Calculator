import propTypes from 'prop-types'
import React, { Component } from 'react'

import { CalculatorDisplay } from '../styled'

export class DisplayCL extends Component {
  render() {
    const { calculatorValue } = this.props

    return (
      <CalculatorDisplay>{calculatorValue}</CalculatorDisplay>
    )
  }
}

DisplayCL.propTypes = {
  calculatorValue: propTypes.string,
}