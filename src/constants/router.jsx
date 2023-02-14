import React from 'react';

import NotFound from '@/components/NotFound';
import HomePageCL from '@/pages/Home/CC';
import HomePageFC from '@/pages/Home/FC';
import SettingsPage from '@/pages/Settings';

import routerPaths from './routerPaths';

const routes = [
  {
    exact: true,
    path: routerPaths.SETTING_PAGE_ROUTE,
    component: <SettingsPage />,
  },
  {
    exact: true,
    path: routerPaths.HOME_PAGE_ROUTE_CL,
    component: <HomePageCL />,
  },
  {
    exact: true,
    path: routerPaths.HOME_PAGE_ROUTE_FC,
    component: <HomePageFC />,
  },
  {
    exact: false,
    path: routerPaths.INCORRECT_PAGE_ROUTE,
    component: <NotFound />,
  },
];
export default routes;
