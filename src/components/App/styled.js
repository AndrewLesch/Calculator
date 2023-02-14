import styled from 'styled-components';

const LAYOUT_WIDTH = 100;
const LAYOUT_HEIGHT = 100;

export const PageLayout = styled.div`
  width: ${LAYOUT_WIDTH}%;
  height: ${LAYOUT_HEIGHT}%;
  padding: ${({ theme }) => theme.spaces[4]}px;
  margin: auto;
  min-height: ${({ theme }) => theme.height[7]}px;
  background-color: ${({ theme }) => theme.colors.layoutBackground};
`;

export const AppWrapper = styled.div`
  height: ${({ theme }) => theme.height[6]}px;
  max-width: ${({ theme }) => theme.width[9]}px;
  max-height: ${({ theme }) => theme.height[7]}px;
  min-height: ${({ theme }) => theme.height[7]}px;
  margin: auto;
`;
