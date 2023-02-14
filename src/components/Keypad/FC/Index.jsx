import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import { keypadButtons, proKeypadButtons } from '@/constants/calculator';

import { KeypadButton, KeypadButtonWrapper } from '../styled';

export default function KeypadFC({ onKeypadButtonClick, isProCalcActive }) {
  const [buttons, setButtons] = useState(keypadButtons);
  const onKeypadButtonClickHandle = btnValue => () => onKeypadButtonClick(btnValue);

  useEffect(() => {
    if (isProCalcActive) {
      setButtons(keypadButtons.concat(proKeypadButtons));
    } else {
      setButtons(keypadButtons);
    }
  }, [isProCalcActive]);

  return (
    <KeypadButtonWrapper>
      {buttons.map(btnValue => (
        <KeypadButton
          value={btnValue}
          onClick={onKeypadButtonClickHandle(btnValue)}
          key={btnValue}
        >
          {btnValue}
        </KeypadButton>
      ))}
    </KeypadButtonWrapper>
  );
}

KeypadFC.propTypes = {
  onKeypadButtonClick: propTypes.func,
  isProCalcActive: propTypes.bool,
};
