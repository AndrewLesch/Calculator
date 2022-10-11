import React from 'react'
import { ThemeOption, ThemeSelector } from './components'
import { ThemeContext } from '../App/App'
import { darkThemeKey, lightThemeKey } from '@/constants'

export const ThemeChanger = () => (
  <ThemeContext.Consumer>
    {({ selectedThemeKey, handleThemeChange }) => (
      <ThemeSelector
        defaultValue={selectedThemeKey}
        onChange={event => handleThemeChange(event.target.value)}
      >
        <ThemeOption value={lightThemeKey}>Light Theme</ThemeOption>
        <ThemeOption value={darkThemeKey}>Dark Theme</ThemeOption>
      </ThemeSelector>
    )}
  </ThemeContext.Consumer>
)
