import React, { Component } from 'react'
import { HistoryContainer, HistoryElement, HistoryElementsContainer, HistoryTitle } from '../components'
import propTypes from 'prop-types'

export class HistoryCL extends Component {
  render() {
    return (
      <HistoryContainer>
        <HistoryTitle>
          History
        </HistoryTitle>
        <HistoryElementsContainer>
          {this.props.history.map((historyElement, i) => <HistoryElement key={i}>{historyElement}</HistoryElement>)}
        </HistoryElementsContainer>
      </HistoryContainer>
    )
  }
}

HistoryCL.propTypes = {
  history: propTypes.array,
}
