import styled from 'styled-components'

export const ControlPanelButton = styled.button`
  margin: 5px auto;
  padding: 5px;
  width: 110px;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  color: black;
  border: 2px solid ${({ theme }) => theme.colors.defaultAppBorder};
  
  &:hover {
    cursor: pointer;
  }
`

export const ControlPanelButtonsContainer = styled.div`
  display: flex;
`