import React from 'react';
import propTypes from 'prop-types';

import {
  HistoryElement,
  HistoryElementsContainer,
  HistoryTitle,
} from '../styled';

export default function HistoryFC({ history }) {
  return (
    <React.Fragment>
      <HistoryTitle>History</HistoryTitle>
      <HistoryElementsContainer>
        {history.map(historyElement => (
          <HistoryElement key={historyElement}>{historyElement}</HistoryElement>
        ))}
      </HistoryElementsContainer>
    </React.Fragment>
  );
}

HistoryFC.propTypes = {
  history: propTypes.arrayOf(propTypes.any),
};
