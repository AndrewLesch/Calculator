import styled from 'styled-components';

export const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spaces[4]}px;
  margin: 0 auto;
  min-height: ${({ theme }) => theme.height[7]}px;
  background-color: ${({ theme }) => theme.colors.layoutBackground};
`;

export const AppWrapper = styled.div`
  height: ${({ theme }) => theme.height[6]}px;
  max-width: ${({ theme }) => theme.width[5]}px;
  max-height: ${({ theme }) => theme.height[6]}px;
  min-height: ${({ theme }) => theme.height[6]}px;
  margin: auto;
`;
