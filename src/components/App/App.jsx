import React, { createContext, useCallback, useEffect, useState } from 'react'
import { AppWrapper, PageLayout } from './components'
import { ThemeProvider } from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { HOME_PAGE_ROUTE_CL, HOME_PAGE_ROUTE_FC, SETTING_PAGE_ROUTE } from '@/constants/router'
import { SettingsPage } from '@/screens/Settings'
import { Header } from '@/components/Header'
import { CURRENT_THEME_LS_KEY } from '@/constants/localStorage'
import { HomePageClass } from '@/screens/Home/HomePageClass'
import { HomePageFunctional } from '@/screens/Home/HomePageFunctional'
import { darkTheme, lightTheme } from '@/styles/theme'
import { darkThemeKey, lightThemeKey } from '@/constants'

export const ThemeContext = createContext({
  selectedThemeKey: lightThemeKey || darkThemeKey,
  handleThemeChange: () => { },
})

export const App = () => {
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

  return (
    <ThemeContext.Provider value={{ selectedThemeKey, handleThemeChange }}>
      <ThemeProvider theme={() => selectedTheme}>
        <PageLayout>
          <AppWrapper>
            <Header />
            <Switch>
              <Route path={SETTING_PAGE_ROUTE} component={SettingsPage} />
              <Route path={HOME_PAGE_ROUTE_CL} component={HomePageClass} />
              <Route path={HOME_PAGE_ROUTE_FC} component={HomePageFunctional} />
              <Route path="*" component={HomePageFunctional} />
            </Switch>
          </AppWrapper>
        </PageLayout>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}