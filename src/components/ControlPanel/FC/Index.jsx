import React from 'react';
import propTypes from 'prop-types';

import { ControlPanelButton, ControlPanelButtonsContainer } from '../styled';

export default function ControlPanelFC({
  isHistoryOpen,
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
        {isHistoryOpen ? 'Hide story' : 'Show history'}
      </ControlPanelButton>
      <ControlPanelButton onClick={onDeleteButtonClickHandle}>
        Delete history
      </ControlPanelButton>
    </ControlPanelButtonsContainer>
  );
}

ControlPanelFC.propTypes = {
  isHistoryOpen: propTypes.bool,
  onHistoryButtonClick: propTypes.func,
  setHistory: propTypes.func,
};