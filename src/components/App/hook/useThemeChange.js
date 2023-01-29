import { useCallback, useEffect, useState } from "react"

import { CURRENT_THEME_LS_KEY, darkThemeKey } from "@/constants"
import { darkTheme, lightTheme } from "@/styles/theme"

export const useThemeChange = () => {
  const [selectedThemeKey, setSelectedThemeKey] = useState(JSON.parse(localStorage.getItem(CURRENT_THEME_LS_KEY)))
  const [selectedTheme, setSelectedTheme] = useState(lightTheme)

  useEffect(() => {
    switch (selectedThemeKey) {
      case darkThemeKey:
        setSelectedTheme(darkTheme)
        break

      default:
        setSelectedTheme(lightTheme)
        break
    }
  }, [selectedThemeKey])

  const handleThemeChange = useCallback(themeKey => {
    setSelectedThemeKey(themeKey)
    localStorage.setItem(CURRENT_THEME_LS_KEY, JSON.stringify(themeKey))
  }, [setSelectedThemeKey])

  return {
    selectedThemeKey,
    selectedTheme,
    setSelectedThemeKey,
    setSelectedTheme,
    handleThemeChange,
  }
}