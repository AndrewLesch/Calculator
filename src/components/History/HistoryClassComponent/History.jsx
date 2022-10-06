import React, { Component } from 'react'
import { HistoryContainer, HistoryElement, HistoryElementsContainer, HistoryTitle } from '../components'

export class HistoryCL extends Component {

  render() {

    return (
      <HistoryContainer>
        <HistoryTitle>
          History
        </HistoryTitle>
        <HistoryElementsContainer />
      </HistoryContainer>
    )
  }
}