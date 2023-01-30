import propTypes from 'prop-types';
import React, { Component } from 'react';

import { ControlPanelButton, ControlPanelButtonsContainer } from '../styled';

export default class ControlPanelCL extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      onHistoryButtonClick,
      isHistoryVisible,
      deleteHistory,
    } = this.props;

    return (
      <ControlPanelButtonsContainer>
        <ControlPanelButton onClick={onHistoryButtonClick}>
          {isHistoryVisible ? 'Hide story' : 'Show history'}
        </ControlPanelButton>
        <ControlPanelButton onClick={deleteHistory}>
          Delete history
        </ControlPanelButton>
      </ControlPanelButtonsContainer>
    );
  }
}

ControlPanelCL.propTypes = {
  isHistoryVisible: propTypes.bool,
  onHistoryButtonClick: propTypes.func,
  deleteHistory: propTypes.func,
};
