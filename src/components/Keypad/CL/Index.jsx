import propTypes from 'prop-types';
import React, { Component } from 'react';

import { keypadButtons } from '@/constants/calculator';

import { KeypadButton, KeypadButtonWrapper } from '../styled';

export default class KeypadCL extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onKeypadButtonClick } = this.props;

    return (
      <KeypadButtonWrapper>
        {keypadButtons.map(btnValue => (
          <KeypadButton
            value={btnValue}
            onClick={() => onKeypadButtonClick(btnValue)}
            key={btnValue}>
            {btnValue}
          </KeypadButton>
        ))}
      </KeypadButtonWrapper>
    );
  }
}

KeypadCL.propTypes = {
  onKeypadButtonClick: propTypes.func,
};
