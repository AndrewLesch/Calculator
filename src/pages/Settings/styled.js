import styled from 'styled-components';

export const SettingsContainer = styled.div`
  border-radius: 0 0 ${({ theme }) => theme.borderRadiuses[1]}px
    ${({ theme }) => theme.borderRadiuses[1]}px;
  background-color: ${({ theme }) => theme.colors.calculatorBackground};
  min-height: ${({ theme }) => theme.height[6]}px;
`;

export const ThemeChangerContainer = styled.div``;

export const SettingsTitle = styled.h1`
  padding: ${({ theme }) => theme.spaces[4]}px;
  color: ${({ theme }) => theme.colors.settingsTitle};
  font-weight: ${({ theme }) => theme.size.xs};
`;

export const DeleteButton = styled.button`
  margin-left: ${({ theme }) => theme.spaces[4]}px;
  height: ${({ theme }) => theme.height[1]}px;
  width: ${({ theme }) => theme.width[2]}px;
  border-radius: ${({ theme }) => theme.borderRadiuses[0]}px;
  cursor: pointer;
  padding-left: ${({ theme }) => theme.spaces[4]}px;
  text-align: start;
  border: ${({ theme }) => theme.borders[1]}px solid
    ${({ theme }) => theme.colors.defaultAppBorder};
`;

export const ThemeChangerDescription = styled.h5`
  margin-left: ${({ theme }) => theme.spaces[4]}px;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  color: ${({ theme }) => theme.colors.themeChangerDescription};
`;
