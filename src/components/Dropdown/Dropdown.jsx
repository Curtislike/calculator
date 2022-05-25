import React, { useState, useContext } from 'react'

import {
  StyledDropdown,
  DropdownButton,
  ArrowDown,
  DropdownContent,
  DropdownItem,
} from './components'
import {
  lightTheme,
  darkTheme,
  coloredTheme,
} from '@/theme'
import { ThemeContext } from '@/context/themeContext'

const themes = {
  light: 0,
  colored: 1,
  dark: 2,
}

const selectTheme = [
  {
    theme: themes.light,
    label: 'Light Theme',
    selected: lightTheme,
  },
  {
    theme: themes.colored,
    label: 'Colored Theme',
    selected: coloredTheme,
  },
  {
    theme: themes.dark,
    label: 'Dark Theme',
    selected: darkTheme,
  },
]

const Dropdown = () => {
  const { setSelectedTheme } = useContext(ThemeContext)
  const [isActive, setIsActive] = useState(false)
  const [themeNum, setThemeNum] = useState(themes.light)

  return (
    <StyledDropdown>
      <DropdownButton
        className="dropdown"
        onClick={() => setIsActive(!isActive)}>
        {selectTheme[themeNum].label}
        <ArrowDown />
      </DropdownButton>
      {isActive && (
        <DropdownContent>
          {selectTheme.map(item =>
            item.theme !== themeNum ? (
              <DropdownItem
                className="dropdownItem"
                id={item.selected.mode}
                key={item.theme}
                onClick={() => {
                  setIsActive(false)
                  setThemeNum(item.theme)
                  setSelectedTheme(item.selected)
                }}>
                {item.label}
              </DropdownItem>
            ) : null,
          )}
        </DropdownContent>
      )}
    </StyledDropdown>
  )
}

export default Dropdown
