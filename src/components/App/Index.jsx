import React, { useCallback, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Header } from '@/components/Header'
import { darkThemeKey, ThemeContext } from '@/constants'
import { CURRENT_THEME_LS_KEY } from '@/constants/localStorage'
import { HOME_PAGE_ROUTE_CL, HOME_PAGE_ROUTE_FC, SETTING_PAGE_ROUTE } from '@/constants/router'
import { HomePageCL } from '@/pages/Home/CL/Index'
import { HomePageFC } from '@/pages/Home/FC/Index'
import { SettingsPage } from '@/pages/Settings/Index'
import { darkTheme, lightTheme } from '@/styles/theme'

import { useThemeChange } from './hook/useThemeChange'
import { AppWrapper, PageLayout } from './styled'


export const App = () => {
  const {
    selectedThemeKey,
    selectedTheme,
    setSelectedThemeKey,
    setSelectedTheme,
    handleThemeChange,
  } = useThemeChange()

  return (
    <ThemeContext.Provider value={{ selectedThemeKey, handleThemeChange }}>
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