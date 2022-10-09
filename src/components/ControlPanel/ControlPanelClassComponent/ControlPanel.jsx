import React, { Component } from 'react'
import propTypes from 'prop-types'
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

ControlPanelCL.propTypes= {
  isHistoryOpen: propTypes.bool,
  onHistoryButtonClick: propTypes.func,
  deleteHistory: propTypes.func,
}