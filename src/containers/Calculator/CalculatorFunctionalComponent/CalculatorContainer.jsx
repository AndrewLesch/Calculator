import React from 'react'
import { CalculatorWrapper, LeftSideWrapper, RigthSideWrapper } from '../components'
import { DisplayFC } from '@/components/Display'
import { HistoryFC } from '@/components/History'
import { KeypadFC } from '@/components/Keypad'
import { ControlPanelFC } from '@/components/ControlPanel'

export const CalculatorContainerFC = () => {

  return (
    <CalculatorWrapper>
      <LeftSideWrapper>
        <DisplayFC />
        <KeypadFC />
      </LeftSideWrapper>
      <RigthSideWrapper>
        <ControlPanelFC />
        <HistoryFC />
      </RigthSideWrapper>
    </CalculatorWrapper>
  )
}
