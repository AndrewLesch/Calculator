import propTypes from 'prop-types'
import React, { Component } from 'react'

import { keypadButtons } from '@/constants/calculator'

import { KeypadButton, KeypadButtonWrapper } from '../styled'

export class KeypadCL extends Component {
  render() {
    return (
      <KeypadButtonWrapper>
        {keypadButtons.map(btnValue =>
          <KeypadButton
            value={btnValue}
            onClick={() => this.props.onKeypadButtonClick(btnValue)}
            key={btnValue}>{btnValue}
          </KeypadButton>,
        )}
      </KeypadButtonWrapper>
    )
  }
}

KeypadCL.propTypes = {
  onKeypadButtonClick: propTypes.func,
}
