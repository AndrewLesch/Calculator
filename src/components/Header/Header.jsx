import React from 'react'
import { Wrapper, Title, LinksContainer, NavbarLink } from './components'
import { HOME_PAGE_ROUTE_CL, HOME_PAGE_ROUTE_FC, SETTING_PAGE_ROUTE } from '@/constants/router'

export const Header = () => (
  <Wrapper>
    <Title>
      Calculator App
    </Title>
    <LinksContainer>
      <NavbarLink activeClassName="activeLink" to={HOME_PAGE_ROUTE_FC}>Home functional</NavbarLink>
      <NavbarLink activeClassName="activeLink" to={HOME_PAGE_ROUTE_CL}>Home class</NavbarLink>
      <NavbarLink activeClassName="activeLink" to={SETTING_PAGE_ROUTE}>Settings</NavbarLink>
    </LinksContainer>
  </Wrapper>
)

