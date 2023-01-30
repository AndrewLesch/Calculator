import propTypes from 'prop-types';
import React, { Component } from 'react';

import {
  HistoryContainer,
  HistoryElement,
  HistoryElementsContainer,
  HistoryTitle,
} from '../styled';

export default class HistoryCL extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;

    return (
      <HistoryContainer>
        <HistoryTitle>History</HistoryTitle>
        <HistoryElementsContainer>
          {history.map(historyElement => (
            <HistoryElement key={historyElement}>
              {historyElement}
            </HistoryElement>
          ))}
        </HistoryElementsContainer>
      </HistoryContainer>
    );
  }
}

HistoryCL.propTypes = {
  history: propTypes.arrayOf,
};
