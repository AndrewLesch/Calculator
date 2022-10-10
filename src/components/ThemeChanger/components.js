import styled from 'styled-components'

export const ThemeSelector = styled.select`
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;
  height: 50px;
  width: 210px;
  padding-left: 20px;
  text-align: start;
  border: 2px solid ${({ theme }) => theme.colors.defaultAppBorder};
`

export const ThemeOption = styled.option`
  border-radius: 5px;
  font-size: 18px;
  border: 2px solid #434343;
`
