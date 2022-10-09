import React from 'react'
import { KeypadButton, KeypadButtonWrapper } from './components'
import propTypes from 'prop-types'
import { keypadButtons } from '@/constants/calculatorConstants'


export const KeypadFunctional = ({ onKeypadButtonClick }) => {
  return (
    <KeypadButtonWrapper>
      {keypadButtons.map(btnValue =>
        <KeypadButton
          value={btnValue}
          onClick={() => onKeypadButtonClick(btnValue)}
          key={btnValue}>{btnValue}
        </KeypadButton>,
      )}
    </KeypadButtonWrapper>
  )
}

KeypadFunctional.propTypes = {
  onKeypadButtonClick: propTypes.func,
}

