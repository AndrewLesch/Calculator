import styled from 'styled-components';

export const HistoryTitle = styled.h4`
  text-align: center;
  margin-top: ${({ theme }) => theme.spaces[2]}px;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  color: ${({ theme }) => theme.colors.historyTitle};
  font-weight: ${({ theme }) => theme.size.small};

  @media (min-width: 0px) and (max-width: 424px) {
    width: ${({ theme }) => theme.mobileThemeStyles.width[3]}px;
  }
`;

export const HistoryElement = styled.p`
  margin: ${({ theme }) => theme.spaces[2]}px;
  color: ${({ theme }) => theme.colors.historyElement};

  @media (min-width: 0px) and (max-width: 424px) {
    width: ${({ theme }) => theme.mobileThemeStyles.width[0]}px;
  }
`;
export const HistoryElementsContainer = styled.div`
  overflow-y: auto;
  max-height: ${({ theme }) => theme.height[6]}px;

  @media (min-width: 0px) and (max-width: 424px) {
    width: ${({ theme }) => theme.mobileThemeStyles.width[2]}px;
    max-height: ${({ theme }) => theme.mobileThemeStyles.height[2]}px;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    width: ${({ theme }) => theme.tabletThemeStyles.width[2]}px;
    max-height: ${({ theme }) => theme.tabletThemeStyles.height[2]}px;
  }

  @media (min-width: 601px) and (max-width: 940px) {
    width: ${({ theme }) => theme.laptopThemeStyles.width[3]}px;
    max-height: ${({ theme }) => theme.laptopThemeStyles.height[2]}px;
  }
`;
