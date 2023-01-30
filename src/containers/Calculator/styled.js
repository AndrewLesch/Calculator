import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
  display: flex;
  height: 90%;
  background-color: ${({ theme }) => theme.colors.calculatorBackground};
  justify-content: space-between;
`;

export const ButtonsWrapper = styled.div`
  width: 1000px;
`;

export const HistoryWrapper = styled.div`
  width: 280px;
  align-items: center;
  height: 90%;
  margin: auto;
  border-left: ${({ theme }) => theme.borders[0]}px solid
    ${({ theme }) => theme.colors.defaultAppBorder};
`;
