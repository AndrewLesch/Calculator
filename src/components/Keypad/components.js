import styled from 'styled-components'

export const KeypadButton = styled.button`
  height: 65px;
  width: 75px;
  margin: 10px;
  border: 2px solid ${({ theme }) => theme.colors.keypadButtonBorder};
  border-radius: 10px;
  font-size: 25px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.keypadText};
  background-color: ${({ theme }) => theme.colors.keypadButton};
  &:hover {
    cursor: pointer;
  }
`

export const KeypadButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 70%;
  margin: auto;
`