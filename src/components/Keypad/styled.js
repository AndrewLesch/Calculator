import styled from 'styled-components';

export const KeypadButton = styled.button`
  height: ${({ theme }) => theme.height[3]}px;
  width: ${({ theme }) => theme.width[0]}px;
  margin: auto;
  border: ${({ theme }) => theme.borders[1]}px solid
    ${({ theme }) => theme.colors.keypadButtonBorder};
  border-radius: ${({ theme }) => theme.borderRadiuses[1]}px;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  font-weight: ${({ theme }) => theme.size.small};
  color: ${({ theme }) => theme.colors.keypadText};
  background-color: ${({ theme }) => theme.colors.keypadButton};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.keypadButtonHover};
  }

  &:active {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.keypadButtonActive};
    color: ${({ theme }) => theme.colors.keypadButtonActiveText};
  }

  @media (min-width: 0px) and (max-width: 424px) {
    width: ${({ theme }) => theme.mobileThemeStyles.width[0]}px;
    height: ${({ theme }) => theme.mobileThemeStyles.height[0]}px;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    width: ${({ theme }) => theme.tabletThemeStyles.width[0]}px;
    height: ${({ theme }) => theme.tabletThemeStyles.height[0]}px;
  }

  @media (min-width: 601px) and (max-width: 940px) {
    width: ${({ theme }) => theme.laptopThemeStyles.width[0]}px;
    height: ${({ theme }) => theme.laptopThemeStyles.height[0]}px;
  }
`;

export const KeypadButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: ${({ theme }) => theme.width[6]}px;
  margin: auto;
  grid-gap: ${({ theme }) => theme.spaces[2]}px;

  @media (min-width: 0px) and (max-width: 424px) {
    width: ${({ theme }) => theme.mobileThemeStyles.width[4]}px;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${({ theme }) => theme.mobileThemeStyles.gridGap}px;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    width: ${({ theme }) => theme.tabletThemeStyles.width[4]}px;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${({ theme }) => theme.tabletThemeStyles.gridGap}px;
  }

  @media (min-width: 601px) and (max-width: 940px) {
    width: ${({ theme }) => theme.laptopThemeStyles.width[5]}px;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: ${({ theme }) => theme.laptopThemeStyles.gridGap}px;
  }
`;
