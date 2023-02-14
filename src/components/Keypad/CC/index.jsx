import React, { Component } from 'react';
import propTypes from 'prop-types';

import { keypadButtons, proKeypadButtons } from '@/constants/calculator';

import { KeypadButton, KeypadButtonWrapper } from '../styled';

export default class KeypadCL extends Component {
  constructor(props) {
    super(props);

    const { isProCalcActive } = this.props;

    this.state = {
      buttons: keypadButtons,
      isProCalc: isProCalcActive,
    };
  }

  componentDidMount() {
    const { isProCalc } = this.state;

    if (isProCalc) {
      this.setState(prevState => ({
        ...prevState,
        buttons: keypadButtons.concat(proKeypadButtons),
      }));
    }
  }

  static getDerivedStateFromProps(props) {
    if (props.isProCalcActive) {
      return { buttons: keypadButtons.concat(proKeypadButtons) };
    }
    return { buttons: keypadButtons };
  }

  onKeypadButtonClickHandle = btnValue => () => {
    const { onKeypadButtonClick } = this.props;
    onKeypadButtonClick(btnValue);
  };

  render() {
    const { buttons } = this.state;
    return (
      <KeypadButtonWrapper>
        {buttons.map(btnValue => (
          <KeypadButton
            value={btnValue}
            onClick={this.onKeypadButtonClickHandle(btnValue)}
            key={btnValue}
          >
            {btnValue}
          </KeypadButton>
        ))}
      </KeypadButtonWrapper>
    );
  }
}

KeypadCL.propTypes = {
  onKeypadButtonClick: propTypes.func,
  isProCalcActive: propTypes.bool,
};
