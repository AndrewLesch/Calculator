import propTypes from 'prop-types';
import React from 'react';

import { keypadButtons } from '@/constants/calculator';

import { KeypadButton, KeypadButtonWrapper } from '../styled';

export default function KeypadFC({ onKeypadButtonClick }) {
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

KeypadFC.propTypes = {
  onKeypadButtonClick: propTypes.func,
};
