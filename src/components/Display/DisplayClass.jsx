import React, { Component } from 'react'
import propTypes from 'prop-types'
import { CalculatorDisplay } from './components'

export class DisplayClass extends Component {
  render() {
    const { calculatorValue } = this.props

    return (
      <CalculatorDisplay>{this.props.calculatorValue}</CalculatorDisplay>
    )
  }
}

DisplayClass.propTypes = {
  calculatorValue: propTypes.string,
}