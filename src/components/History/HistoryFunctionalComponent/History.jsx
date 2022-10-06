import React from 'react'
import { HistoryContainer, HistoryElement, HistoryElementsContainer, HistoryTitle } from '../components'
import PropTypes from 'prop-types'

export const HistoryFC = ({ history }) => {
  
  return (
    <HistoryContainer>
      <HistoryTitle>
        History
      </HistoryTitle>
      <HistoryElementsContainer>
        {history.map(historyElement => <HistoryElement key={historyElement}>{historyElement}</HistoryElement>)}
      </HistoryElementsContainer>
    </HistoryContainer>
  )
}

HistoryFC.PropTypes = {
  history: PropTypes.array,
}
