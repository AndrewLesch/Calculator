import propTypes from 'prop-types';
import React from 'react';

import CalculatorDisplay from '../styled';

export default function DisplayFC({ calculatorValue }) {
  return <CalculatorDisplay>{calculatorValue}</CalculatorDisplay>;
}

DisplayFC.propTypes = {
  calculatorValue: propTypes.oneOfType([propTypes.string, propTypes.number]),
};
