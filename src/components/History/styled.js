import styled from 'styled-components';

export const HistoryContainer = styled.div`
  width: 100%;
`;
export const HistoryTitle = styled.h4`
  text-align: center;
  margin-top: ${({ theme }) => theme.spaces[2]}px;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  color: ${({ theme }) => theme.colors.historyTitle};
  font-weight: ${({ theme }) => theme.size.small};
`;
export const HistoryElement = styled.p`
  margin: ${({ theme }) => theme.spaces[2]}px;
  color: ${({ theme }) => theme.colors.historyElement};
`;
export const HistoryElementsContainer = styled.div`
  overflow-y: auto;
  max-height: ${({ theme }) => theme.height[5]}px;
`;
