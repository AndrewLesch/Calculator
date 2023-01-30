import React from 'react';

import ThemeChanger from '@/components/ThemeChanger/Index';
import clearCalculatorData from '@/utils/clearCalculatorData';

import {
  DeleteButton,
  SettingsContainer,
  SettingsTitle,
  ThemeChangerContainer,
  ThemeChangerDescription,
} from './styled';

export default function SettingsPage() {
  return (
    <SettingsContainer>
      <SettingsTitle>Settings</SettingsTitle>
      <ThemeChangerContainer>
        <ThemeChangerDescription>Switch theme</ThemeChangerDescription>
        <ThemeChanger />
      </ThemeChangerContainer>
      <DeleteButton onClick={clearCalculatorData}>
        Clear all history
      </DeleteButton>
    </SettingsContainer>
  );
}
