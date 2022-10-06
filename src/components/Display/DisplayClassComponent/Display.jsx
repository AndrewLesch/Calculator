import React, { Component } from 'react'
import { CalculatorDisplay } from '../components'

export class DisplayCL extends Component {

  render() {

    return (
      <CalculatorDisplay>{this.props.calculatorValue}</CalculatorDisplay>
    )
  }

}
