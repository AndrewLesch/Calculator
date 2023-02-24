import routerPaths from '@/constants/routerPaths';

const { HOME_PAGE_ROUTE_FC, HOME_PAGE_ROUTE_CL, SETTING_PAGE_ROUTE } = routerPaths;

const navBarLinks = [
  {
    to: HOME_PAGE_ROUTE_FC,
    name: 'Home functional',
  },
  {
    to: HOME_PAGE_ROUTE_CL,
    name: 'Home class',
  },
  {
    to: SETTING_PAGE_ROUTE,
    name: 'Settings',
  },
];

export default navBarLinks;
