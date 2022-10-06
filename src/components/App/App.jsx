import React from 'react'
import { Card, PageLayout } from './components'
import { ThemeProvider } from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { HOME_PAGE_ROUTE_CL, HOME_PAGE_ROUTE_FC, SETTING_PAGE_ROUTE } from '@/constants/router'
import { SettingsPage } from '@/screens/Settings'
import { Header } from '@/components/Header'
import { HomePageCL } from '@/screens/Home_Classes/HomePage'
import { HomePageFC } from '@/screens/Home_Functional/HomePage'
import { lightTheme } from '@/styles/theme'


export const App = () => {

  return (
      <ThemeProvider theme={() => lightTheme}>
        <PageLayout>
          <Card>
            <Header />
            <Switch>
              <Route path={SETTING_PAGE_ROUTE} component={SettingsPage} />
              <Route path={HOME_PAGE_ROUTE_CL} component={HomePageCL} />
              <Route path={HOME_PAGE_ROUTE_FC} component={HomePageFC} />
              <Route path="*" component={HomePageFC} />
            </Switch>
          </Card>
        </PageLayout>
      </ThemeProvider>
  )
}