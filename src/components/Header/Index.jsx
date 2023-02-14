import React from 'react';

import navBarLinks from './config';
import {
  LinksContainer, NavbarLink, Title, Wrapper,
} from './styled';

export default function Header() {
  return (
    <Wrapper>
      <Title>Calculator App</Title>
      <LinksContainer>
        {navBarLinks.map(({ to, name }) => (
          <NavbarLink
            exact activeClassName="activeLink"
            to={to} key={to}>
            {name}
          </NavbarLink>
        ))}
      </LinksContainer>
    </Wrapper>
  );
}
