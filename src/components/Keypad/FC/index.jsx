import React, { memo, useMemo } from 'react';
import propTypes from 'prop-types';

import { keypadButtons, proKeypadButtons } from '@/constants/calculator';

import { KeypadButton, KeypadButtonWrapper } from '../styled';

const KeypadFC = memo(({ onKeypadButtonClick, isProCalcActive }) => {
  const onKeypadButtonClickHandle = btnValue => () => onKeypadButtonClick(btnValue);

  const buttonsValue = useMemo(
    () => (isProCalcActive ? proKeypadButtons : keypadButtons),
    [isProCalcActive],
  );

  return (
    <KeypadButtonWrapper>
      {buttonsValue.map((btnValue, id) => (
        <KeypadButton
          value={btnValue}
          onClick={onKeypadButtonClickHandle(btnValue)}
          key={btnValue}
          data-testid={id}
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
