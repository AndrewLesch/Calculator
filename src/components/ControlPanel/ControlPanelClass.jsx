import React, { Component } from 'react'
import propTypes from 'prop-types'
import { ControlPanelButton, ControlPanelButtonsContainer } from './components'

export class ControlPanelClass extends Component {
  render() {
    const { onHistoryButtonClick, isHistoryOpen, deleteHistory } = this.props

    return (
      <ControlPanelButtonsContainer>
        <ControlPanelButton onClick={() => onHistoryButtonClick()}>{isHistoryOpen ? 'Hide story' : 'Show history'}</ControlPanelButton>
        <ControlPanelButton onClick={() => deleteHistory()}>Delete history</ControlPanelButton>
      </ControlPanelButtonsContainer>
    )
  }
}

ControlPanelClass.propTypes = {
  isHistoryOpen: propTypes.bool,
  onHistoryButtonClick: propTypes.func,
  deleteHistory: propTypes.func,
}