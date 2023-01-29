import propTypes from 'prop-types'
import React from 'react'

import { HistoryContainer, HistoryElement, HistoryElementsContainer, HistoryTitle } from '../styled'

export const HistoryFC = ({ history }) => (
  <HistoryContainer>
    <HistoryTitle>
      History
    </HistoryTitle>
    <HistoryElementsContainer>
      {history.map((historyElement, i) => <HistoryElement key={i}>{historyElement}</HistoryElement>)}
    </HistoryElementsContainer>
  </HistoryContainer>
)


HistoryFC.propTypes = {
  history: propTypes.array,
}
