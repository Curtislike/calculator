import React, { useState } from 'react'

import {
  StyledDropdown,
  DropdownButton,
  ArrowDown,
  DropdownContent,
  DropdownItem,
} from './components'

const themes = {
  light: 0,
  colored: 1,
  dark: 2,
}

const selectTheme = [
  { theme: themes.light, label: 'Light Theme' },
  { theme: themes.colored, label: 'Colored Theme' },
  { theme: themes.dark, label: 'Dark Theme' },
]

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState(
    themes.light,
  )

  return (
    <StyledDropdown>
      <DropdownButton
        onClick={() => setIsActive(!isActive)}>
        {selectTheme[selectedTheme].label}
        <ArrowDown />
      </DropdownButton>
      {isActive && (
        <DropdownContent>
          {selectTheme.map(item =>
            item.theme !== selectedTheme ? (
              <DropdownItem
                key={item.theme}
                onClick={() => {
                  setIsActive(false)
                  setSelectedTheme(item.theme)
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
