import styled from 'styled-components'

export const StyledCalculator = styled.div`
  margin: 0 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`
export const WrapperDisplayKeypad = styled.div`
  display: flex;
  flex-direction: column;
`
