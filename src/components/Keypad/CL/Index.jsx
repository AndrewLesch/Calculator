import propTypes from 'prop-types';
import React, { Component } from 'react';

import { keypadButtons } from '@/constants/calculator';

import { KeypadButton, KeypadButtonWrapper } from '../styled';

export default class KeypadCL extends Component {
  onKeypadButtonClickHandle = btnValue => () => {
    const { onKeypadButtonClick } = this.props;
    onKeypadButtonClick(btnValue);
  };

  render() {
    return (
      <KeypadButtonWrapper>
        {keypadButtons.map(btnValue => (
          <KeypadButton
            value={btnValue}
            onClick={this.onKeypadButtonClickHandle(btnValue)}
            key={btnValue}
          >
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
