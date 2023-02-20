import React, { useMemo } from 'react';
import propTypes from 'prop-types';

import { keypadButtons, proKeypadButtons } from '@/constants/calculator';

import { KeypadButton, KeypadButtonWrapper } from '../styled';

const KeypadFC = React.memo(({ onKeypadButtonClick, isProCalcActive }) => {
  const onKeypadButtonClickHandle = btnValue => () => onKeypadButtonClick(btnValue);

  const buttonsValue = useMemo(
    () => (isProCalcActive ? proKeypadButtons : keypadButtons),
    [isProCalcActive],
  );

  return (
    <KeypadButtonWrapper>
      {buttonsValue.map(btnValue => (
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
});

export default KeypadFC;

KeypadFC.propTypes = {
  onKeypadButtonClick: propTypes.func,
  isProCalcActive: propTypes.bool,
};
