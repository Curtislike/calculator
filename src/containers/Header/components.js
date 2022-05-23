import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: #434343;
  text-align: center;
  display: flex;
  margin-bottom: 15px;
  border: 1px solid #707070;
  height: 120px;
  color: #ffffff;
`

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 1856px;
  font-size: 32px;
  @media (max-width: 530px) {
    font-size: 22px;
  }
`

export const NavWrap = styled.nav`
  display: flex;
  flex-direction: row;
  .navItem {
    margin-left: 30px;
    text-decoration: none;
    color: #ffffff;
    opacity: 0.7;
  }
`
