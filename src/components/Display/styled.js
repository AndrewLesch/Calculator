import styled from 'styled-components';

export const CalculatorDisplay = styled.div`
  background-color: ${({ theme }) => theme.colors.calculatorDisplayBackground};
  margin: ${({ theme }) => theme.spaces[3]}px auto;
  width: ${({ theme }) => theme.width[5]}px;
  height: ${({ theme }) => theme.height[5]}px;
  font-weight: ${({ theme }) => theme.size.xs};
  text-align: end;
  border-radius: ${({ theme }) => theme.borderRadiuses[1]}px;
  border: ${({ theme }) => theme.borders[1]}px solid
    ${({ theme }) => theme.colors.defaultAppBorder};

  @media (min-width: 0px) and (max-width: 424px) {
    width: ${({ theme }) => theme.mobileThemeStyles.width[4]}px;
    height: ${({ theme }) => theme.mobileThemeStyles.height[1]}px;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    width: ${({ theme }) => theme.tabletThemeStyles.width[3]}px;
    height: ${({ theme }) => theme.tabletThemeStyles.height[1]}px;
  }

  @media (min-width: 601px) and (max-width: 940px) {
    width: ${({ theme }) => theme.laptopThemeStyles.width[4]}px;
    height: ${({ theme }) => theme.laptopThemeStyles.height[1]}px;
  }
`;

export const CalculatorDisplayValue = styled.span`
  color: ${({ theme }) => theme.colors.calculatorDisplayValue};
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  height: ${({ theme }) => theme.height[0]}px;
  display: block;
  margin-right: ${({ theme }) => theme.spaces[4]}px;

  @media (min-width: 0px) and (max-width: 424px) {
    font-size: ${({ theme }) => theme.mobileThemeStyles.fontSizes[3]}px;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    font-size: ${({ theme }) => theme.tabletThemeStyles.fontSizes[3]}px;
  }

  @media (min-width: 601px) and (max-width: 940px) {
    font-size: ${({ theme }) => theme.laptopThemeStyles.fontSizes[2]}px;
  }
`;

export const CalculatorDisplayLastExp = styled.span`
  color: ${({ theme }) => theme.colors.calculatorDisplayExp};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  height: ${({ theme }) => theme.height[0]}px;
  display: block;
  margin: ${({ theme }) => theme.spaces[1]}px
    ${({ theme }) => theme.spaces[4]}px;

  @media (min-width: 0px) and (max-width: 424px) {
    font-size: ${({ theme }) => theme.mobileThemeStyles.fontSizes[2]}px;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    font-size: ${({ theme }) => theme.tabletThemeStyles.fontSizes[2]}px;
  }

  @media (min-width: 601px) and (max-width: 940px) {
    font-size: ${({ theme }) => theme.laptopThemeStyles.fontSizes[1]}px;
  }
`;
