import React from 'react'
import { HistoryContainer, HistoryElement, HistoryElementsContainer, HistoryTitle } from './components'
import propTypes from 'prop-types'

export const HistoryFunctional = ({ history }) => {

  return (
    <HistoryContainer>
      <HistoryTitle>
        History
      </HistoryTitle>
      <HistoryElementsContainer>
        {history.map((historyElement, i) => <HistoryElement key={i}>{historyElement}</HistoryElement>)}
      </HistoryElementsContainer>
    </HistoryContainer>
  )
}

HistoryFunctional.propTypes = {
  history: propTypes.array,
}
