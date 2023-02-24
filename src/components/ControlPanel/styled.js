import styled from 'styled-components';

export const ControlPanelButton = styled.button`
  margin: ${({ theme }) => theme.spaces[2]}px auto;
  padding: ${({ theme }) => theme.spaces[1]}px;
  width: ${({ theme }) => theme.width[0]}px;
  background-color: ${({ theme }) => theme.colors.controlPanelBackground};
  height: ${({ theme }) => theme.height[0]}px;
  border-radius: ${({ theme }) => theme.borderRadiuses[0]}px;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  color: ${({ theme }) => theme.colors.controlPanelButton};
  border: ${({ theme }) => theme.borders[1]}px solid
    ${({ theme }) => theme.colors.defaultAppBorder};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.controlPanelBackgroundHover};
  }

  &:active {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.controlPanelBackgroundActive};
  }

  @media (min-width: 0px) and (max-width: 424px) {
    width: ${({ theme }) => theme.mobileThemeStyles.width[2]}px;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    width: ${({ theme }) => theme.tabletThemeStyles.width[1]}px;
  }

  @media (min-width: 601px) and (max-width: 940px) {
    width: ${({ theme }) => theme.laptopThemeStyles.width[2]}px;
  }
`;

export const ControlPanelButtonsContainer = styled.div`
  display: flex;

  @media (min-width: 0px) and (max-width: 424px) {
    display: block;
    text-align: center;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    display: block;
    text-align: center;
  }

  @media (min-width: 601px) and (max-width: 940px) {
    display: flex;
  }
`;
