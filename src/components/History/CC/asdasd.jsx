import React, { Fragment, PureComponent } from 'react';
import propTypes from 'prop-types';

import {
  HistoryElement,
  HistoryElementsContainer,
  HistoryTitle,
} from '../styled';

export default class HistoryCL extends PureComponent {
  render() {
    const { history } = this.props;

    return (
      <Fragment>
        <HistoryTitle>History</HistoryTitle>
        <HistoryElementsContainer>
          {history.map(historyElement => (
            <HistoryElement key={historyElement}>
              {historyElement}
            </HistoryElement>
          ))}
        </HistoryElementsContainer>
      </Fragment>
    );
  }
}

HistoryCL.propTypes = {
  history: propTypes.arrayOf(propTypes.string),
};
