import React, { createContext, useCallback, useEffect, useState } from 'react'
import { AppWrapper, PageLayout } from './components'
import { ThemeProvider } from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { HOME_PAGE_ROUTE_CL, HOME_PAGE_ROUTE_FC, SETTING_PAGE_ROUTE } from '@/constants/router'
import { SettingsPage } from '@/screens/Settings'
import { Header } from '@/components/Header'
import { CURRENT_THEME_LS_KEY } from '@/constants/localStorage'
import { getStartValue } from '@/utils/GetStartValue'
import { HomePageClass } from '@/screens/Home/HomePageClass'
import { HomePageFunctional } from '@/screens/Home/HomePageFunctional'
import { darkTheme, lightTheme } from '@/styles/theme'
import { saveThemeToLS } from './constants'

export const ThemeContext = createContext({
  selectedTheme: lightTheme || darkTheme,
  setSelectedTheme: () => { },
})

export const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(lightTheme)

  useEffect(() =>{
    const themeKey = JSON.parse(localStorage.getItem(CURRENT_THEME_LS_KEY)) 
    switch (themeKey) {
      case lightTheme.key:
        setSelectedTheme(lightTheme)
        break;
    
      default:
        setSelectedTheme(darkTheme)
        break;
    }
  },[])

  const handleThemeChange = useCallback(theme => {
    const parsedTheme = JSON.parse(theme)
    setSelectedTheme(parsedTheme)
    saveThemeToLS(parsedTheme.key)
  },[setSelectedTheme])

  return (
    <ThemeContext.Provider value={{ selectedTheme, handleThemeChange }}>
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