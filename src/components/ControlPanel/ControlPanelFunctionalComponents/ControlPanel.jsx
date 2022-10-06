import React from 'react'
import { ControlPanelButton, ControlPanelButtonsContainer } from '../components'

export const ControlPanelFC = () => {

  return (
    <ControlPanelButtonsContainer>
      <ControlPanelButton>Show history</ControlPanelButton>
      <ControlPanelButton>Delete history</ControlPanelButton>
    </ControlPanelButtonsContainer>
  )
}