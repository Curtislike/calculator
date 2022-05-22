import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

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
`

const NavWrap = styled.nav`
  display: flex;
  flex-direction: row;
  .navItem {
    margin-left: 15px;
    text-decoration: none;
    color: #ffffff;
    opacity: 0.7;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <div>Calculator App</div>
        <NavWrap>
          <NavLink
            exact
            to={HOME_PAGE_ROUTE}
            activeStyle={{
              opacity: 1,
              borderBottom: 'solid',
              borderBottomColor: '#ffffff',
              borderBottomWidth: 2,
            }}
            className="navItem">
            Home
          </NavLink>
          <NavLink
            to={SETTINGS_PAGE_ROUTE}
            activeStyle={{
              opacity: 1,
              borderBottom: 'solid',
              borderBottomColor: '#ffffff',
              borderBottomWidth: 2,
            }}
            className="navItem">
            Settings
          </NavLink>
        </NavWrap>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
