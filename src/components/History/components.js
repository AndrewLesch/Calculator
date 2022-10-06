import styled from 'styled-components'

export const HistoryContainer = styled.div`
  width: 100%
`
export const HistoryTitle = styled.h4`
  text-align: center;
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  color: ${({ theme }) => theme.colors.historyTitle};
  font-weight: 500;
`
export const HistoryElement = styled.p`
  margin: 10px;
  color: ${({ theme }) => theme.colors.historyElement};
`
export const HistoryElementsContainer = styled.div`
  overflow-y: auto;
  max-height: 325px;
`