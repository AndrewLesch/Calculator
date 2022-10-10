import React from 'react'
import { ThemeOption, ThemeSelector } from './components'
import { ThemeContext } from '../App/App'

export const ThemeChanger = () => {
  return (
    <ThemeContext.Consumer>
      {({ selectedTheme, handleThemeChange }) => (
        <ThemeSelector
          defaultValue={selectedTheme.key === 'lightTheme' ? 'lightTheme' : 'darkTheme'}
          onChange={event => handleThemeChange(event.target.value)}
        >
          <ThemeOption value="lightTheme">Light Theme</ThemeOption>
          <ThemeOption value="darkTheme">Dark Theme</ThemeOption>
        </ThemeSelector>
      )}
    </ThemeContext.Consumer>
  )
}
