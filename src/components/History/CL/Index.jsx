import propTypes from 'prop-types'
import React, { Component } from 'react'

import { HistoryContainer, HistoryElement, HistoryElementsContainer, HistoryTitle } from '../styled'

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
