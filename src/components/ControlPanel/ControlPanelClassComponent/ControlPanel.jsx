import React, { Component } from 'react'
import { ControlPanelButton, ControlPanelButtonsContainer } from '../components'

export class ControlPanelCL extends Component {
  render() {

    return (
      <ControlPanelButtonsContainer>
        <ControlPanelButton>Show history</ControlPanelButton>
        <ControlPanelButton>Delete history</ControlPanelButton>
      </ControlPanelButtonsContainer>
    )
  }
}