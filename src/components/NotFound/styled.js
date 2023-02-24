import styled from 'styled-components';

export const Container = styled.div`
  height: ${({ theme }) => theme.height[5]}px;
  padding: ${({ theme }) => theme.spaces[6]}px;
  border: ${({ theme }) => theme.borders[1]}px solid
    ${({ theme }) => theme.colors.notFoundBorder};
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  font-weight: ${({ theme }) => theme.size.small};
  color: ${({ theme }) => theme.colors.notFoundText};
  background-color: ${({ theme }) => theme.colors.notFound};
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: ${({ theme }) => theme.size.small};
`;
