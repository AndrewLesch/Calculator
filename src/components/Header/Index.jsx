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
  return (
    <Wrapper>
      <Title>Calculator App</Title>
      <LinksContainer>
        <NavbarLink activeClassName="activeLink" to={HOME_PAGE_ROUTE_FC}>
          Home functional
        </NavbarLink>
        <NavbarLink activeClassName="activeLink" to={HOME_PAGE_ROUTE_CL}>
          Home class
        </NavbarLink>
        <NavbarLink activeClassName="activeLink" to={SETTING_PAGE_ROUTE}>
          Settings
        </NavbarLink>
      </LinksContainer>
    </Wrapper>
  );
}
