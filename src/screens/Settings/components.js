import styled from "styled-components"

export const SettingsContainer = styled.div`
  width: 100%;
  height: 90%;
  background-color: ${({ theme }) => theme.colors.calculatorBackground};
`

export const ThemeChangerContainer = styled.div`

`

export const SettingsTitle = styled.h1`
  padding: 20px;
  color: ${({ theme }) => theme.colors.settingsTitle};
  font-weight: 300;
`

export const DeleteButton = styled.button`
  margin-left: 20px;
  height: 50px;
  width: 210px;
  border-radius: 5px;
  cursor: pointer;
  padding-left: 20px;
  text-align: start;
  border: 2px solid ${({ theme }) => theme.colors.defaultAppBorder};
`

export const ThemeChangerDescription = styled.h4`
margin-left: 20px;
font-size: 14px;
color: ${({ theme }) => theme.colors.themeChangerDescription};
`