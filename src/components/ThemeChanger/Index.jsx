import React, { useContext } from 'react';

import ThemeContext from '@/constants/themeContext';

import themeOptions from './config';
import { ThemeOption, ThemeSelector } from './styled';

export default function ThemeChanger() {
  const { selectedThemeKey, handleThemeChange } = useContext(ThemeContext);
  return (
    <ThemeSelector
      defaultValue={selectedThemeKey}
      onChange={event => handleThemeChange(event.target.value)}
    >
      {themeOptions.map(({ value, text }) => (
        <ThemeOption value={value} key={value}>
          {text}
        </ThemeOption>
      ))}
    </ThemeSelector>
  );
}
