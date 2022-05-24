import React, { createContext, useState } from 'react'
import {
  darkTheme,
  lightTheme,
  coloredTheme,
} from '@/theme'

const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(
    lightTheme,
  )

  return (
    <ThemeContext.Provider
      value={{ selectedTheme, setSelectedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
