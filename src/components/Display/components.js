import styled from 'styled-components'

export const CalculatorDisplay = styled.div`
  margin: 20px;
  width: 90%;
  height: 10%;
  font-size: 35px;
  font-weight: 400;
  text-align: end;
  border: none;
  border-bottom: 1px solid #707070;
  color: ${({ theme }) => theme.colors.calculatorDisplayText};
  `