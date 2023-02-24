import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

import {
  CalculatorDisplay,
  CalculatorDisplayLastExp,
  CalculatorDisplayValue,
} from '../styled';

export default class DisplayCL extends PureComponent {
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
