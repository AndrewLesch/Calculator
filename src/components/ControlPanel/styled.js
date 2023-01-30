import styled from 'styled-components';

export const ControlPanelButton = styled.button`
  margin: ${({ theme }) => theme.spaces[1]}px auto;
  padding: ${({ theme }) => theme.spaces[1]}px;
  width: 110px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadiuses[0]}px;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  color: ${({ theme }) => theme.colors.controlPanelButton};
  border: ${({ theme }) => theme.borders[1]}px solid
    ${({ theme }) => theme.colors.defaultAppBorder};

  &:hover {
    cursor: pointer;
  }
`;

export const ControlPanelButtonsContainer = styled.div`
  display: flex;
`;
