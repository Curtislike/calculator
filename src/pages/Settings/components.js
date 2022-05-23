import styled from 'styled-components'

export const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 60px 80px;
  @media (max-width: 530px) {
    margin: 60px 20px;
  }
`

export const SettingsTitle = styled.h1`
  font-size: 64px;
  font-weight: normal;
  color: #000000;
  @media (max-width: 530px) {
    font-size: 36px;
  }
`
export const StyledButton = styled.button`
  width: 400px;
  height: 93px;
  border: 2px solid #707070;
  border-radius: 8px;
  font-size: 32px;
  text-align: left;
  cursor: pointer;
  padding: 28px;
  margin-top: 30px;
  @media (max-width: 530px) {
    width: 300px;
    height: 75px;
    font-size: 26px;
    padding: 20px;
  }
`
