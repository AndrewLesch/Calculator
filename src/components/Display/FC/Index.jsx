import React from 'react';
import propTypes from 'prop-types';

import {
  CalculatorDisplay,
  CalculatorDisplayLastExp,
  CalculatorDisplayValue,
} from '../styled';

export default function DisplayFC({ calculatorValue, lastExpression }) {
  return (
    <CalculatorDisplay>
      <CalculatorDisplayLastExp>{lastExpression}</CalculatorDisplayLastExp>
      <CalculatorDisplayValue>{calculatorValue}</CalculatorDisplayValue>
    </CalculatorDisplay>
  );
}

DisplayFC.propTypes = {
  calculatorValue: propTypes.oneOfType([propTypes.string, propTypes.number]),
  lastExpression: propTypes.string,
};
