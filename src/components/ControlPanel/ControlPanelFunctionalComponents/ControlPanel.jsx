import React from 'react'
import propTypes from 'prop-types'
import { ControlPanelButton, ControlPanelButtonsContainer } from '../components'

export const ControlPanelFC = ({ isHistoryOpen, onHistoryButtonClick, setHistory }) => {
  return (
    <ControlPanelButtonsContainer>
      <ControlPanelButton onClick={onHistoryButtonClick}>{isHistoryOpen ? "Hide story" : "Show history"}</ControlPanelButton>
      <ControlPanelButton onClick={() => setHistory([])}>Delete history</ControlPanelButton>
    </ControlPanelButtonsContainer>
  )
}

ControlPanelFC.propTypes = {
  isHistoryOpen: propTypes.bool,
  onHistoryButtonClick: propTypes.func,
  setHistory: propTypes.func,
}
