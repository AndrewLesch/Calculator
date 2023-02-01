import styled from 'styled-components';

export const ThemeSelector = styled.select`
  margin: ${({ theme }) => theme.spaces[1]}px 0
    ${({ theme }) => theme.spaces[4]}px ${({ theme }) => theme.spaces[4]}px;
  border-radius: ${({ theme }) => theme.borderRadiuses[0]}px;
  cursor: pointer;
  height: ${({ theme }) => theme.height[1]}px;
  width: ${({ theme }) => theme.width[2]}px;
  padding-left: ${({ theme }) => theme.spaces[4]}px;
  text-align: start;
  border: ${({ theme }) => theme.borders[1]}px solid
    ${({ theme }) => theme.colors.defaultAppBorder};
`;

export const ThemeOption = styled.option`
  border-radius: ${({ theme }) => theme.borderRadiuses[0]}px;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  border: ${({ theme }) => theme.borders[1]}px solid
    ${({ theme }) => theme.colors.defaultAppBorder};
`;
