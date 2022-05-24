import styled from 'styled-components'

export const StyledPanel = styled.div`
  margin: 0 20px;
  cursor: pointer;
  .item {
    background-color: ${({ theme }) => theme.secondary};
    width: 35px;
    height: 4px;
    margin: 6px 0;
  }
`
