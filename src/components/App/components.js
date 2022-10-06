import styled from 'styled-components'

export const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spaces[4]}px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.layoutBackground};
`

export const Card = styled.div`
  width: 70%;
  height: 60%;
  max-width: 1280px;
  max-height: 500px;
  margin: auto;
`