import React, { Component } from 'react';
import propTypes from 'prop-types';

import {
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
      <React.Fragment>
        <HistoryTitle>History</HistoryTitle>
        <HistoryElementsContainer>
          {history.map(historyElement => (
            <HistoryElement key={historyElement}>
              {historyElement}
            </HistoryElement>
          ))}
        </HistoryElementsContainer>
      </React.Fragment>
    );
  }
}

HistoryCL.propTypes = {
  history: propTypes.arrayOf(propTypes.any),
};
