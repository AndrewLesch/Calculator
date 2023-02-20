import React from 'react';

import ThemeChanger from '@/components/ThemeChanger';
import clearCalculatorData from '@/utils/clearCalculatorData';

import {
  DeleteButton,
  SettingsContainer,
  SettingsTitle,
  ThemeChangerContainer,
  ThemeChangerDescription,
} from './styled';

export default function SettingsPage() {
  const deleteButtonClickHandle = () => {
    clearCalculatorData();
  };
  return (
    <SettingsContainer>
      <SettingsTitle>Settings</SettingsTitle>
      <ThemeChangerContainer>
        <ThemeChangerDescription>Switch theme</ThemeChangerDescription>
        <ThemeChanger />
      </ThemeChangerContainer>
      <DeleteButton onClick={deleteButtonClickHandle}>
        Clear all history
      </DeleteButton>
    </SettingsContainer>
  );
}
