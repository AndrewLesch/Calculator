import React from 'react'
import { ThemeOption, ThemeSelector } from './components'
import { darkTheme, lightTheme } from '@/styles/theme'
import { ThemeContext } from '../App/App'

export const ThemeChanger = () => {
  return (
    <ThemeContext.Consumer>
      {({ selectedTheme, handleThemeChange }) => (
        <ThemeSelector defaultValue={JSON.stringify(selectedTheme)} onChange={() => handleThemeChange(event.target.value)}>
          <ThemeOption value={JSON.stringify(lightTheme)}>Light Theme</ThemeOption>
          <ThemeOption value={JSON.stringify(darkTheme)}>Dark Theme</ThemeOption>
        </ThemeSelector>
      )}
    </ThemeContext.Consumer>
  )
}
