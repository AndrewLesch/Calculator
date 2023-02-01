import propTypes from 'prop-types';
import React, { Component } from 'react';

import { ControlPanelButton, ControlPanelButtonsContainer } from '../styled';

export default class ControlPanelCL extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onHistoryButtonClickHandle = () => {
    const { onHistoryButtonClick } = this.props;
    onHistoryButtonClick();
  };

  onDeleteButtonClickHandle = () => {
    const { deleteHistory } = this.props;
    deleteHistory();
  };

  render() {
    const { isHistoryVisible } = this.props;

    return (
      <ControlPanelButtonsContainer>
        <ControlPanelButton onClick={this.onHistoryButtonClickHandle}>
          {isHistoryVisible ? 'Hide story' : 'Show history'}
        </ControlPanelButton>
        <ControlPanelButton onClick={this.onDeleteButtonClickHandle}>
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
