import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 150px;
  height: 150px;
  border: 1px solid #707070;
  border-radius: 32px;
  font-size: 64px;
  cursor: pointer;
  align-self: center;
  justify-self: center;
  @media (max-width: 1610px) {
    width: 120px;
    height: 120px;
    font-size: 52px;
  }
  @media (max-width: 1340px) {
    width: 80px;
    height: 80px;
    font-size: 34px;
    border-radius: 22px;
  }
  @media (max-width: 1160px) {
    width: 70px;
    height: 70px;
    font-size: 30px;
    border-radius: 18px;
  }
  @media (max-width: 920px) {
    width: 60px;
    height: 60px;
    font-size: 26px;
    border-radius: 16px;
  }
  @media (max-width: 780px) {
    width: 55px;
    height: 55px;
    font-size: 24px;
    border-radius: 14px;
  }
  @media (max-width: 650px) {
    width: 33px;
    height: 33px;
    font-size: 13px;
    border-radius: 8px;
  }
`
