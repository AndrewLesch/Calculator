import React from 'react';

import { darkThemeKey, lightThemeKey, ThemeContext } from '@/constants';

import { ThemeOption, ThemeSelector } from './styled';

export default function ThemeChanger() {
  return (
    <ThemeContext.Consumer>
      {({ selectedThemeKey, handleThemeChange }) => (
        <ThemeSelector
          defaultValue={selectedThemeKey}
          onChange={event => handleThemeChange(event.target.value)}>
          <ThemeOption value={lightThemeKey}>Light Theme</ThemeOption>
          <ThemeOption value={darkThemeKey}>Dark Theme</ThemeOption>
        </ThemeSelector>
      )}
    </ThemeContext.Consumer>
  );
}
