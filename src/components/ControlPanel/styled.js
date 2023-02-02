import styled from 'styled-components';

export const ControlPanelButton = styled.button`
  margin: ${({ theme }) => theme.spaces[1]}px auto;
  padding: ${({ theme }) => theme.spaces[1]}px;
  width: 40%;
  height: ${({ theme }) => theme.height[0]}px;
  border-radius: ${({ theme }) => theme.borderRadiuses[0]}px;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  color: ${({ theme }) => theme.colors.controlPanelButton};
  border: ${({ theme }) => theme.borders[1]}px solid
    ${({ theme }) => theme.colors.defaultAppBorder};

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 0px) and (max-width: 424px) {
    width: 80%;
    margin-left: 10%;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    width: 80%;
    margin-left: 10%;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    width: 40%;
  }
`;

export const ControlPanelButtonsContainer = styled.div`
  display: flex;

  @media (min-width: 0px) and (max-width: 424px) {
    display: block;
  }

  @media (min-width: 425px) and (max-width: 600px) {
    display: block;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    display: flex;
  }
`;
