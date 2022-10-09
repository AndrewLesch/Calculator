import React, { Component } from 'react'
import propTypes from 'prop-types'
import { KeypadButton, KeypadButtonWrapper } from '../components'
import { keypadButtons } from '@/constants/calculatorConstants'

export class KeypadCL extends Component {
  render() {
    return (
      <KeypadButtonWrapper>
        {keypadButtons.map((btnValue, index) =>
          <KeypadButton
            value={btnValue}
            onClick={() => this.props.onKeypadButtonClick(btnValue)}
            key={index}>{btnValue}
          </KeypadButton>,
        )}
      </KeypadButtonWrapper>
    )
  }
}

KeypadCL.propTypes = {
  onKeypadButtonClick: propTypes.func,
}
