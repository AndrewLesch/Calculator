import propTypes from 'prop-types';
import React from 'react';

import {
  HistoryContainer,
  HistoryElement,
  HistoryElementsContainer,
  HistoryTitle,
} from '../styled';

export default function HistoryFC({ history }) {
  return (
    <HistoryContainer>
      <HistoryTitle>History</HistoryTitle>
      <HistoryElementsContainer>
        {history.map(historyElement => (
          <HistoryElement key={historyElement}>{historyElement}</HistoryElement>
        ))}
      </HistoryElementsContainer>
    </HistoryContainer>
  );
}

HistoryFC.propTypes = {
  history: propTypes.arrayOf,
};
