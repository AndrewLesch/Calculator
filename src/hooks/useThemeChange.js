import { useCallback, useEffect, useState } from 'react';

import { colorThemeKey, darkThemeKey } from '@/constants/calculator';
import { CURRENT_THEME_LS_KEY } from '@/constants/localStorage';
import { colorTheme, darkTheme, lightTheme } from '@/styles/theme';

const getStartValue = key => JSON.parse(localStorage.getItem(key));

export default function useThemeChange() {
  const [selectedThemeKey, setSelectedThemeKey] = useState(() => getStartValue(CURRENT_THEME_LS_KEY));
  const [selectedTheme, setSelectedTheme] = useState(lightTheme);

  useEffect(() => {
    switch (selectedThemeKey) {
      case darkThemeKey:
        setSelectedTheme(darkTheme);
        break;

      case colorThemeKey:
        setSelectedTheme(colorTheme);
        break;

      default:
        setSelectedTheme(lightTheme);
        break;
    }
  }, [selectedThemeKey]);

  const handleThemeChange = useCallback(
    themeKey => {
      setSelectedThemeKey(themeKey);
      localStorage.setItem(CURRENT_THEME_LS_KEY, JSON.stringify(themeKey));
    },
    [setSelectedThemeKey],
  );

  return {
    selectedThemeKey,
    selectedTheme,
    handleThemeChange,
  };
}
