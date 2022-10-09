import React, { createContext, useState, useEffect } from 'react'
import { AppWrapper, PageLayout } from './components'
import { ThemeProvider } from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { HOME_PAGE_ROUTE_CL, HOME_PAGE_ROUTE_FC, SETTING_PAGE_ROUTE } from '@/constants/router'
import { SettingsPage } from '@/screens/Settings'
import { Header } from '@/components/Header'
import { CURRENT_THEME_LS_KEY } from '@/constants/localStorage'
import { getStartValue } from '@/utils/GetStartValue'
import { HomePageCL } from '@/screens/HomeClass/HomePage'
import { HomePageFC } from '@/screens/HomeFunctional/HomePage'

export const ThemeContext = createContext()

export const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(getStartValue(CURRENT_THEME_LS_KEY))

  useEffect(() => {
    localStorage.setItem(CURRENT_THEME_LS_KEY, JSON.stringify(selectedTheme))
  }, [selectedTheme])

  const handleThemeChange = theme => {
    setSelectedTheme(JSON.parse(theme))
  }

  return (
    <ThemeContext.Provider value={{ selectedTheme, handleThemeChange }}>
      <ThemeProvider theme={() => selectedTheme}>
        <PageLayout>
          <AppWrapper>
            <Header />
            <Switch>
              <Route path={SETTING_PAGE_ROUTE} component={SettingsPage} />
              <Route path={HOME_PAGE_ROUTE_CL} component={HomePageCL} />
              <Route path={HOME_PAGE_ROUTE_FC} component={HomePageFC} />
              <Route path="*" component={HomePageFC} />
            </Switch>
          </AppWrapper>
        </PageLayout>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}