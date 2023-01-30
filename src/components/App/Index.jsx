import React, { useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ThemeContext } from '@/constants';
import {
  HOME_PAGE_ROUTE_CL,
  HOME_PAGE_ROUTE_FC,
  SETTING_PAGE_ROUTE,
} from '@/constants/router';
import HomePageCL from '@/pages/Home/CL/Index';
import HomePageFC from '@/pages/Home/FC/Index';
import SettingsPage from '@/pages/Settings/Index';

import Header from '../Header/Index';
import useThemeChange from './hook/useThemeChange';
import { AppWrapper, PageLayout } from './styled';

export default function App() {
  const {
    selectedThemeKey,
    selectedTheme,
    handleThemeChange,
  } = useThemeChange();

  const themeContextValue = useMemo(
    () => ({ selectedThemeKey, handleThemeChange }),
    [selectedThemeKey, handleThemeChange],
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
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
  );
}
