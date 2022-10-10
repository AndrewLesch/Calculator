import React from 'react'
import { ThemeOption, ThemeSelector } from './components'
import { ThemeContext } from '../App/App'
import { darkTheme, lightTheme } from '@/styles/theme'

export const ThemeChanger = () => (
  <ThemeContext.Consumer>
    {({ selectedTheme, handleThemeChange }) => (
      <ThemeSelector
        defaultValue={JSON.stringify(selectedTheme)}
        onChange={event => handleThemeChange(event.target.value)}
      >
        <ThemeOption value={JSON.stringify(lightTheme)}>Light Theme</ThemeOption>
        <ThemeOption value={JSON.stringify(darkTheme)}>Dark Theme</ThemeOption>
      </ThemeSelector>
    )}
  </ThemeContext.Consumer>
)

