import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CalculatorDisplay } from '../components'

export class DisplayCL extends Component {

  render() {

    return (
      <CalculatorDisplay>{this.props.calculatorValue}</CalculatorDisplay>
    )
  }

}

DisplayCL.PropTypes = {
  calculatorValue: PropTypes.string,
}