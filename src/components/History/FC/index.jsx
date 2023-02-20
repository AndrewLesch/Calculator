import React, { Fragment } from 'react';
import propTypes from 'prop-types';

import {
  HistoryElement,
  HistoryElementsContainer,
  HistoryTitle,
} from '../styled';

export default function HistoryFC({ history }) {
  return (
    <Fragment>
      <HistoryTitle>History</HistoryTitle>
      <HistoryElementsContainer>
        {history.map(historyElement => (
          <HistoryElement key={historyElement}>{historyElement}</HistoryElement>
        ))}
      </HistoryElementsContainer>
    </Fragment>
  );
}

HistoryFC.propTypes = {
  history: propTypes.arrayOf(propTypes.string),
};
