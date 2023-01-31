import React from 'react';

import { darkThemeKey, lightThemeKey } from '@/constants/calculator';
import ThemeContext from '@/constants/themeContext';

import { ThemeOption, ThemeSelector } from './styled';

export default function ThemeChanger() {
  const themeOptions = [
    { value: lightThemeKey, text: 'Light Theme' },
    { value: darkThemeKey, text: 'Dark Theme' },
  ];

  return (
    <ThemeContext.Consumer>
      {({ selectedThemeKey, handleThemeChange }) => (
        <ThemeSelector
          defaultValue={selectedThemeKey}
          onChange={event => handleThemeChange(event.target.value)}
        >
          {themeOptions.map(themeOption => (
            <ThemeOption value={themeOption.value} key={themeOption.value}>
              {themeOption.text}
            </ThemeOption>
          ))}
        </ThemeSelector>
      )}
    </ThemeContext.Consumer>
  );
}
