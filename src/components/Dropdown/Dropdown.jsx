import React, { useState } from 'react'
import styled from 'styled-components'

const StyledDropdown = styled.div`
  width: 400px;
  height: 93px;
  border: 2px solid #707070;
  border-radius: 8px;
  font-size: 32px;
  text-align: left;
  cursor: pointer;
  padding: 28px;
  margin-top: 30px;
  position: relative;
`

const DropdownButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ArrowDown = styled.div`
  box-sizing: border-box;
  height: 25px;
  width: 25px;
  border-style: solid;
  border-color: #b5b5b5;
  border-width: 0px 4px 4px 0px;
  transform: rotate(45deg);
  transition: border-width 150ms ease-in-out;
`

const DropdownContent = styled.div`
  position: absolute;
  left: 0;
  top: 85%;
  width: 100%;
  border: 2px solid #707070;
  background: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

const DropdownItem = styled.div`
  border-bottom: 2px solid #b5b5b5;
  padding: 15px 28px;
`

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
