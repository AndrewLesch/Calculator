import React from 'react'
import { Wrapper, TitleContainer, Title, LinksContainer, NavbarLink } from './components'
import { HOME_PAGE_ROUTE_CL, HOME_PAGE_ROUTE_FC, SETTING_PAGE_ROUTE } from '@/constants/router'

export const Header = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>
          Calculator App
        </Title>
      </TitleContainer>
      <LinksContainer>
        <NavbarLink to={HOME_PAGE_ROUTE_FC}>Home functional</NavbarLink>
        <NavbarLink to={HOME_PAGE_ROUTE_CL}>Home class</NavbarLink>
        <NavbarLink to={SETTING_PAGE_ROUTE}>Settings</NavbarLink>
      </LinksContainer>
    </Wrapper>
  )
}
