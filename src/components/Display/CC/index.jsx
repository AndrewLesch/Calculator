import React, { Component } from 'react';
import propTypes from 'prop-types';

import {
  CalculatorDisplay,
  CalculatorDisplayLastExp,
  CalculatorDisplayValue,
} from '../styled';

export default class DisplayCL extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { calculatorValue, lastExpression } = this.props;

    return (
      <CalculatorDisplay>
        <CalculatorDisplayLastExp>{lastExpression}</CalculatorDisplayLastExp>
        <CalculatorDisplayValue>{calculatorValue}</CalculatorDisplayValue>
      </CalculatorDisplay>
    );
  }
}

DisplayCL.propTypes = {
  calculatorValue: propTypes.oneOfType([propTypes.string, propTypes.number]),
  lastExpression: propTypes.string,
};
