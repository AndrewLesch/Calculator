import styled from 'styled-components';

export const KeypadButton = styled.button`
  height: ${({ theme }) => theme.height[3]}px;
  width: ${({ theme }) => theme.width[0]}px;
  margin: auto; 
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
  grid-template-columns: repeat(7, 1fr);
  width: 70%;
  margin: auto;
  grid-gap: 20px;
`;
