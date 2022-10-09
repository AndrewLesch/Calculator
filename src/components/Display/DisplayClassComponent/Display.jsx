import React, { Component } from 'react'
import propTypes from 'prop-types'
import { CalculatorDisplay } from '../components'

export class DisplayCL extends Component {
  render() {
    return (
      <CalculatorDisplay>{this.props.calculatorValue}</CalculatorDisplay>
    )
  }

}

DisplayCL.propTypes = {
  calculatorValue: propTypes.string,
}