import React from 'react'
import { KeypadButton, KeypadButtonWrapper } from '../components'
import { keypadButtons } from '@/constants/calculatorConstants'

export const KeypadFC = () => {

  return (
    <KeypadButtonWrapper>
      {keypadButtons.map((btnValue, index) =>
        <KeypadButton
          value={btnValue}
          key={index}>{btnValue}
        </KeypadButton>,
      )}

    </KeypadButtonWrapper>
  )
}