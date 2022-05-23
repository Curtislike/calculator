import styled from 'styled-components'

export const StyledKeypad = styled.div`
  margin: 28px 100px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 45px 130px;
  align-items: center;
  @media (max-width: 1640px) {
    margin: 28px 50px;
    gap: 35px 85px;
  }
  @media (max-width: 1340px) {
    margin: 28px 40px;
    gap: 30px 75px;
  }
  @media (max-width: 1160px) {
    margin: 22px 30px;
    gap: 26px 44px;
  }
  @media (max-width: 920px) {
    margin: 22px 30px;
    gap: 24px 38px;
  }
  @media (max-width: 780px) {
    margin: 22px 20px;
    gap: 16px 32px;
  }
  @media (max-width: 650px) {
    margin: 10px;
    gap: 10px 12px;
  }
`
