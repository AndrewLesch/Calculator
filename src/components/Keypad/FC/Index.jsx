import propTypes from 'prop-types';
import React, { useMemo } from 'react';

import { keypadButtons } from '@/constants/calculator';

import { KeypadButton, KeypadButtonWrapper } from '../styled';

export default function KeypadFC({ onKeypadButtonClick }) {
  const onKeypadButtonClickHandle = btnValue => () => onKeypadButtonClick(btnValue);

  const buttons = useMemo(
    () => keypadButtons.map(btnValue => (
      <KeypadButton
        value={btnValue}
        onClick={onKeypadButtonClickHandle(btnValue)}
        key={btnValue}
        >
        {btnValue}
      </KeypadButton>
    )),
    [onKeypadButtonClick],
  );

  return <KeypadButtonWrapper>{buttons}</KeypadButtonWrapper>;
}

KeypadFC.propTypes = {
  onKeypadButtonClick: propTypes.func,
};
