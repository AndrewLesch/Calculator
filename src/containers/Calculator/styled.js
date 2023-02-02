import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
  display: flex;
  height: 95%;
  background-color: ${({ theme }) => theme.colors.calculatorBackground};
  justify-content: space-between;
`;

export const ButtonsWrapper = styled.div`
  width: 75%;
`;

export const HistoryWrapper = styled.div`
  width: 25%;
  align-items: center;
  height: 90%;
  margin: auto;
  border-left: ${({ theme }) => theme.borders[0]}px solid
    ${({ theme }) => theme.colors.defaultAppBorder};
`;
