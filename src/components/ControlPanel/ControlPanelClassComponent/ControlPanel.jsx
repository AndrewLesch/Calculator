import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ControlPanelButton, ControlPanelButtonsContainer } from '../components'

export class ControlPanelCL extends Component {
  render() {

    return (
      <ControlPanelButtonsContainer>
        <ControlPanelButton onClick={this.props.onHistoryButtonClick}>{this.props.isHistoryOpen ? "Hide story" : "Show history"}</ControlPanelButton>
        <ControlPanelButton onClick={() => this.props.deleteHistory()}>Delete history</ControlPanelButton>
      </ControlPanelButtonsContainer>
    )
  }
}

ControlPanelCL.PropTypes = {
  isHistoryOpen: PropTypes.bool,
  onHistoryButtonClick: PropTypes.func,
  delteteHistory: PropTypes.func,
}