import React, { Component } from 'react'
import propTypes from 'prop-types'
import { KeypadButton, KeypadButtonWrapper } from './components'
import { keypadButtons } from '@/constants/calculator'

export class KeypadClass extends Component {
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

KeypadClass.propTypes = {
  onKeypadButtonClick: propTypes.func,
}
