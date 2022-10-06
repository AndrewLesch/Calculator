import React from 'react'
import PropTypes from 'prop-types'
import { ControlPanelButton, ControlPanelButtonsContainer } from '../components'

export const ControlPanelFC = ({ isHistoryOpen, onHistoryButtonClick, setHistory }) => {
  return (
    <ControlPanelButtonsContainer>
      <ControlPanelButton onClick={onHistoryButtonClick}>{isHistoryOpen ? "Hide story" : "Show history"}</ControlPanelButton>
      <ControlPanelButton onClick={() => setHistory([])}>Delete history</ControlPanelButton>
    </ControlPanelButtonsContainer>
  )
}

ControlPanelFC.PropTypes = {
  isHistoryOpen: PropTypes.bool,
  onHistoryButtonClick: PropTypes.func,
  setHistory: PropTypes.func,
}
