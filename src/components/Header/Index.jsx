import React from 'react';

import {
  HOME_PAGE_ROUTE_CL,
  HOME_PAGE_ROUTE_FC,
  SETTING_PAGE_ROUTE,
} from '@/constants/router';

import {
  LinksContainer, NavbarLink, Title, Wrapper,
} from './styled';

export default function Header() {
  const navBarLinks = [
    {
      activeClassName: 'activeLink',
      to: HOME_PAGE_ROUTE_FC,
      name: 'Home functional',
    },
    {
      activeClassName: 'activeLink',
      to: HOME_PAGE_ROUTE_CL,
      name: 'Home class',
    },
    {
      activeClassName: 'activeLink',
      to: SETTING_PAGE_ROUTE,
      name: 'Settings',
    },
  ];

  return (
    <Wrapper>
      <Title>Calculator App</Title>
      <LinksContainer>
        {navBarLinks.map(link => (
          <NavbarLink
            exact
            activeClassName={link.activeClassName}
            to={link.to}
            key={link.to}
          >
            {link.name}
          </NavbarLink>
        ))}
      </LinksContainer>
    </Wrapper>
  );
}
