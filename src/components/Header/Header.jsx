import React from 'react'
import { Heading, TitleContainer, Title, LinksContainer, NavbarLink } from './components'
import { HOME_PAGE_ROUTE_CL, HOME_PAGE_ROUTE_FC, SETTING_PAGE_ROUTE } from '@/constants/router'

export const Header = () => {

  return (
    <Heading>
      <TitleContainer>
        <Title>
          Calculator App
        </Title>
      </TitleContainer>
      <LinksContainer>
        <NavbarLink to={HOME_PAGE_ROUTE_FC}>HomeFC</NavbarLink>
        <NavbarLink to={HOME_PAGE_ROUTE_CL}>HomeCL</NavbarLink>
        <NavbarLink to={SETTING_PAGE_ROUTE}>Settings</NavbarLink>
      </LinksContainer>
    </Heading>
  )
}
