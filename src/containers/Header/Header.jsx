import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'
import {
  StyledHeader,
  StyledContainer,
  NavWrap,
} from './components'

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
