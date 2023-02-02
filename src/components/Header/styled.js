import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: ${({ theme }) => theme.height[2]}px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.headerTitle};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: ${({ theme }) => theme.size.small};
  margin-left: ${({ theme }) => theme.spaces[4]}px;

  @media (min-width: 0px) and (max-width: 424px) {
    font-size: ${({ theme }) => theme.mobileThemeStyles.fontSizes[1]}px;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    font-size: ${({ theme }) => theme.tabletThemeStyles.fontSizes[1]}px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.laptopThemeStyles.fontSizes[1]}px;
  }
`;

export const LinksContainer = styled.div`
  width: 70%;
  text-align: end;
`;

export const NavbarLink = styled(NavLink)`
  &.${props => props.activeClassName} {
    color: ${({ theme }) => theme.colors.headerNavButtonActive};
    text-decoration: underline;
  }

  margin-right: ${({ theme }) => theme.spaces[4]}px;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.size.xs};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  color: ${({ theme }) => theme.colors.headerNavButton};

  &:hover {
    color: ${({ theme }) => theme.colors.headerNavButtonActive};
    text-decoration: underline;
  }

  @media (min-width: 0px) and (max-width: 424px) {
    font-size: ${({ theme }) => theme.mobileThemeStyles.fontSizes[0]}px;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    font-size: ${({ theme }) => theme.tabletThemeStyles.fontSizes[0]}px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.laptopThemeStyles.fontSizes[0]}px;
  }
`;
