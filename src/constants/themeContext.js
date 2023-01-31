import { createContext } from 'react';

import { darkThemeKey, lightThemeKey } from './calculator';

const ThemeContext = createContext({
  selectedThemeKey: lightThemeKey || darkThemeKey,
  handleThemeChange: () => {},
});

export default ThemeContext;
