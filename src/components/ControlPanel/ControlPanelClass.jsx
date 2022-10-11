import React, { Component } from 'react'
import propTypes from 'prop-types'
import { ControlPanelButton, ControlPanelButtonsContainer } from './components'

export class ControlPanelClass extends Component {
  render() {
    const { onHistoryButtonClick, isHistoryVisible, deleteHistory } = this.props

    return (
      <ControlPanelButtonsContainer>
        <ControlPanelButton onClick={onHistoryButtonClick}>{isHistoryVisible ? 'Hide story' : 'Show history'}</ControlPanelButton>
        <ControlPanelButton onClick={deleteHistory}>Delete history</ControlPanelButton>
      </ControlPanelButtonsContainer>
    )
  }
}

ControlPanelClass.propTypes = {
  isHistoryVisible: propTypes.bool,
  onHistoryButtonClick: propTypes.func,
  deleteHistory: propTypes.func,
}