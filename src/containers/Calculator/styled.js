import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
  display: flex;
  height: ${({ theme }) => theme.height[9]}px;
  background-color: ${({ theme }) => theme.colors.calculatorBackground};
  justify-content: space-between;
  border-radius: 0 0 ${({ theme }) => theme.borderRadiuses[1]}px
    ${({ theme }) => theme.borderRadiuses[1]}px;

  @media (min-width: 0px) and (max-width: 424px) {
    max-height: ${({ theme }) => theme.mobileThemeStyles.height[4]}px;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    max-height: ${({ theme }) => theme.tabletThemeStyles.height[4]}px;
  }

  @media (min-width: 601px) and (max-width: 940px) {
    min-height: ${({ theme }) => theme.laptopThemeStyles.height[4]}px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: ${({ theme }) => theme.width[7]}px;

  @media (min-width: 0px) and (max-width: 424px) {
    width: ${({ theme }) => theme.mobileThemeStyles.width[5]}px;
  }
`;

export const HistoryWrapper = styled.div`
  width: ${({ theme }) => theme.width[4]}px;
  align-items: center;
  height: ${({ theme }) => theme.height[8]}px;
  margin: auto;
  border-left: ${({ theme }) => theme.borders[0]}px solid
    ${({ theme }) => theme.colors.defaultAppBorder};

  @media (min-width: 0px) and (max-width: 424px) {
    max-height: ${({ theme }) => theme.mobileThemeStyles.height[3]}px;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    max-height: ${({ theme }) => theme.tabletThemeStyles.height[3]}px;
  }

  @media (min-width: 601px) and (max-width: 940px) {
    min-height: ${({ theme }) => theme.laptopThemeStyles.height[3]}px;
  }
`;
