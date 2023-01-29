import propTypes from 'prop-types'
import React from 'react'

import { ControlPanelButton, ControlPanelButtonsContainer } from '../styled'

export const ControlPanelFC = ({ isHistoryVisible, onHistoryButtonClick, setHistory }) => (
  <ControlPanelButtonsContainer>
    <ControlPanelButton onClick={onHistoryButtonClick}>{isHistoryVisible ? 'Hide story' : 'Show history'}</ControlPanelButton>
    <ControlPanelButton onClick={() => setHistory([])}>Delete history</ControlPanelButton>
  </ControlPanelButtonsContainer>
)

ControlPanelFC.propTypes = {
  isHistoryVisible: propTypes.bool,
  onHistoryButtonClick: propTypes.func,
  setHistory: propTypes.func,
}