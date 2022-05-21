import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #434343;
  text-align: center;
  display: flex;
  margin-bottom: 15px;
  border: 1px solid #707070;
  height: 120px;
  color: #ffffff;
`

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 1856px;
  font-size: 32px;
  opacity: 1; // add different opacity
`

const NavWrap = styled.nav`
  display: flex;
  flex-direction: row;
  .navItem {
    padding-left: 15px;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <div>Calculator App</div>
        <NavWrap>
          <div className="navItem">Home</div>
          <div className="navItem">Settings</div>
        </NavWrap>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
