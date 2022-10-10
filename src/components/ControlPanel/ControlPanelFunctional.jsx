import React from 'react'
import propTypes from 'prop-types'
import { ControlPanelButton, ControlPanelButtonsContainer } from './components'

export const ControlPanelFunctional = ({ isHistoryVisible, onHistoryButtonClick, setHistory }) => (
  <ControlPanelButtonsContainer>
    <ControlPanelButton onClick={onHistoryButtonClick}>{isHistoryVisible ? 'Hide story' : 'Show history'}</ControlPanelButton>
    <ControlPanelButton onClick={() => setHistory([])}>Delete history</ControlPanelButton>
  </ControlPanelButtonsContainer>
)


ControlPanelFunctional.propTypes = {
  isHistoryVisible: propTypes.bool,
  onHistoryButtonClick: propTypes.func,
  setHistory: propTypes.func,
}
