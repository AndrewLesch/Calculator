import styled from 'styled-components';

export const KeypadButton = styled.button`
  height: 65px;
  width: 75px;
  margin: ${({ theme }) => theme.spaces[2]}px;
  border: ${({ theme }) => theme.borders[1]}px solid
    ${({ theme }) => theme.colors.keypadButtonBorder};
  border-radius: ${({ theme }) => theme.borderRadiuses[1]}px;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  font-weight: ${({ theme }) => theme.size.small};
  color: ${({ theme }) => theme.colors.keypadText};
  background-color: ${({ theme }) => theme.colors.keypadButton};
  &:hover {
    cursor: pointer;
  }
`;

export const KeypadButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 70%;
  margin: auto;
`;
