import propTypes from 'prop-types';
import React, { Component } from 'react';

import CalculatorDisplay from '../styled';

export default class DisplayCL extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { calculatorValue } = this.props;

    return <CalculatorDisplay>{calculatorValue}</CalculatorDisplay>;
  }
}

DisplayCL.propTypes = {
  calculatorValue: propTypes.string,
};
