import React from 'react';

import NotFound from '@/components/NotFound';
import HomePageCL from '@/pages/Home/CC';
import HomePageFC from '@/pages/Home/FC';
import SettingsPage from '@/pages/Settings';

import routerPaths from './routerPaths';

const {
  SETTING_PAGE_ROUTE,
  HOME_PAGE_ROUTE_CL,
  HOME_PAGE_ROUTE_FC,
  INCORRECT_PAGE_ROUTE,
} = routerPaths;

const routes = [
  {
    exact: true,
    path: SETTING_PAGE_ROUTE,
    component: <SettingsPage />,
  },
  {
    exact: true,
    path: HOME_PAGE_ROUTE_CL,
    component: <HomePageCL />,
  },
  {
    exact: true,
    path: HOME_PAGE_ROUTE_FC,
    component: <HomePageFC />,
  },
  {
    exact: false,
    path: INCORRECT_PAGE_ROUTE,
    component: <NotFound />,
  },
];
export default routes;
