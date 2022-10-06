import React, { Component } from 'react'
import { HistoryContainer, HistoryElement, HistoryElementsContainer, HistoryTitle } from '../components'
import PropTypes from 'prop-types'

export class HistoryCL extends Component {

  render() {

    return (
      <HistoryContainer>
        <HistoryTitle>
          History
        </HistoryTitle>
        <HistoryElementsContainer>
          {this.props.history.map(historyElement => <HistoryElement key={historyElement}>{historyElement}</HistoryElement>)}
        </HistoryElementsContainer>
      </HistoryContainer>
    )
  }
}

HistoryCL.PropTypes = {
  history: PropTypes.array,
}
