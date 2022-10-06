import React, { Component } from 'react'
import { CalculatorWrapper, LeftSideWrapper, RigthSideWrapper } from '../components'
import { DisplayCL } from '@/components/Display'
import { HistoryCL } from '@/components/History'
import { KeypadCL } from '@/components/Keypad'
import { ControlPanelCL } from '@/components/ControlPanel'

export class CalculatorContainerCL extends Component {

  render() {


    return (
      <CalculatorWrapper>
        <LeftSideWrapper>
          <DisplayCL />
          <KeypadCL />
        </LeftSideWrapper>
        <RigthSideWrapper>
          <ControlPanelCL />
          <HistoryCL />
        </RigthSideWrapper>
      </CalculatorWrapper >
    )
  }
}
