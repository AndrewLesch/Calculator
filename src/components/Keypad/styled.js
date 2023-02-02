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
  }

  @media (min-width: 0px) and (max-width: 424px) {
    width: ${({ theme }) => theme.mobileThemeStyles.width}px;
    height: ${({ theme }) => theme.mobileThemeStyles.height}px;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    width: ${({ theme }) => theme.tabletThemeStyles.width}px;
    height: ${({ theme }) => theme.tabletThemeStyles.height}px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    width: ${({ theme }) => theme.laptopThemeStyles.width}px;
    height: ${({ theme }) => theme.laptopThemeStyles.height}px;
  }
`;

export const KeypadButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 80%;
  margin: auto;
  grid-gap: ${({ theme }) => theme.spaces[2]}px;

  @media (min-width: 0px) and (max-width: 424px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${({ theme }) => theme.mobileThemeStyles.gridGap}px;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${({ theme }) => theme.tabletThemeStyles.gridGap}px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: ${({ theme }) => theme.laptopThemeStyles.gridGap}px;
  }
`;
