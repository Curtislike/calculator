import styled from 'styled-components'

export const StyledDisplay = styled.div`
  margin: 0 auto;
  width: 100%;
  border-bottom: 2px solid #707070;
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  @media (max-width: 920px) {
    padding: 20px;
  }
  @media (max-width: 650px) {
    padding: 10px;
  }
`

export const DisplayValue = styled.div`
  color: #000000;
  font-size: 64px;
  padding: 0 10px;
  @media (max-width: 920px) {
    font-size: 48px;
  }
  @media (max-width: 650px) {
    font-size: 32px;
    padding: 0 8px;
  }
`
