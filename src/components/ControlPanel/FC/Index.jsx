import propTypes from 'prop-types';
import React from 'react';

import { ControlPanelButton, ControlPanelButtonsContainer } from '../styled';

export default function ControlPanelFC({
  isHistoryVisible,
  onHistoryButtonClick,
  setHistory,
}) {
  const onHistoryButtonClickHandle = () => {
    onHistoryButtonClick();
  };

  const onDeleteButtonClickHandle = () => {
    setHistory([]);
  };

  return (
    <ControlPanelButtonsContainer>
      <ControlPanelButton onClick={onHistoryButtonClickHandle}>
        {isHistoryVisible ? 'Hide story' : 'Show history'}
      </ControlPanelButton>
      <ControlPanelButton onClick={onDeleteButtonClickHandle}>
        Delete history
      </ControlPanelButton>
    </ControlPanelButtonsContainer>
  );
}

ControlPanelFC.propTypes = {
  isHistoryVisible: propTypes.bool,
  onHistoryButtonClick: propTypes.func,
  setHistory: propTypes.func,
};
