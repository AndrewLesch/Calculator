import styled from 'styled-components'

export const CalculatorDisplay = styled.div`
  margin: ${({ theme }) => theme.spaces[4]}px;
  width: 90%;
  height: 10%;
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
  font-weight: ${({ theme }) => theme.size.xs};
  text-align: end;
  border: none;
  border-bottom: ${({ theme }) => theme.borders[0]}px solid ${({ theme }) => theme.colors.defaultAppBorder};
  color: ${({ theme }) => theme.colors.calculatorDisplayText};
`