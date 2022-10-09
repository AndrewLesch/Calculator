import React from 'react'
import { KeypadButton, KeypadButtonWrapper } from '../components'
import propTypes from 'prop-types'
import { keypadButtons } from '@/constants/calculatorConstants'


export const KeypadFC = ({ onKeypadButtonClick }) => {
  return (
    <KeypadButtonWrapper>
      {keypadButtons.map((btnValue, index) =>
        <KeypadButton
          value={btnValue}
          onClick={() => onKeypadButtonClick(btnValue)}
          key={index}>{btnValue}
        </KeypadButton>,
      )}

    </KeypadButtonWrapper>
  )
}

KeypadFC.propTypes = {
  onKeypadButtonClick: propTypes.func,
}

