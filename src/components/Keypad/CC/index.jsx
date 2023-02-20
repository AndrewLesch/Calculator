import React, { Component, memo } from 'react';
import propTypes from 'prop-types';

import { keypadButtons, proKeypadButtons } from '@/constants/calculator';

import { KeypadButton, KeypadButtonWrapper } from '../styled';

class KeypadCL extends Component {
  constructor(props) {
    super(props);

    const { isProCalcActive, onKeypadButtonClick } = this.props;

    this.state = {
      buttons: keypadButtons,
      isProCalc: isProCalcActive,
    };
    this.onKeypadButtonClick = onKeypadButtonClick;
  }

  componentDidMount() {
    const { isProCalc } = this.state;

    if (isProCalc) {
      this.setState(prevState => ({
        ...prevState,
        buttons: proKeypadButtons,
      }));
    }
  }

  static getDerivedStateFromProps(props) {
    if (props.isProCalcActive) {
      return { buttons: proKeypadButtons };
    }
    return { buttons: keypadButtons };
  }

  onKeypadButtonClickHandle = btnValue => () => {
    this.onKeypadButtonClick(btnValue);
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

export default memo(KeypadCL);

KeypadCL.propTypes = {
  onKeypadButtonClick: propTypes.func,
  isProCalcActive: propTypes.bool,
};
