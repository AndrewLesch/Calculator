import styled from 'styled-components'

export const CalculatorWrapper = styled.div`
  display: flex;
  height: 90%;
  background-color: ${({ theme }) => theme.colors.calculatorBackground};
`

export const ButtonsWrapper = styled.div`
  width: 75%;
`

export const HistoryWrapper = styled.div`
  width: 25%;
  align-items: center;
  height: 90%;
  margin: auto;
  border-left: 1px solid #707070;
`