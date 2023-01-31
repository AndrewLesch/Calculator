import React from 'react';

import NotFound from '@/components/NotFound/Index';
import HomePageCL from '@/pages/Home/CL/Index';
import HomePageFC from '@/pages/Home/FC/Index';
import SettingsPage from '@/pages/Settings/Index';

export const HOME_PAGE_ROUTE_FC = '/';
export const HOME_PAGE_ROUTE_CL = '/CL';
export const SETTING_PAGE_ROUTE = '/settings';
const INCORRECT_PAGE_ROUTE = '*';

export const routes = [
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
