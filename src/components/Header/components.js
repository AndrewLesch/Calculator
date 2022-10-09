import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  align-items: center;
`
export const TitleContainer = styled.div`
  width: 30%;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.headerTitle};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: 500;
  margin-left: 20px;
`

export const LinksContainer = styled.div`
  width: 70%;
  text-align: end;
`

export const NavbarLink = styled(Link)`
  margin-right: 20px;
  text-decoration: none;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  color: ${({ theme }) => theme.colors.headerNavButton};

  &:hover{
      color: ${({ theme }) => theme.colors.headerNavButtonActive};
      text-decoration: underline;
  }
`