import React, { useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { routes } from '@/constants/router';
import ThemeContext from '@/constants/themeContext';

import Header from '../Header/Index';
import useThemeChange from './hook/useThemeChange';
import { AppWrapper, PageLayout } from './styled';

export default function App() {
  const { selectedThemeKey, selectedTheme, handleThemeChange } = useThemeChange();

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
              {routes.map(route => (
                <Route
                  exact={route.exact} path={route.path}
                  key={route.path}>
                  {route.component}
                </Route>
              ))}
            </Switch>
          </AppWrapper>
        </PageLayout>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
