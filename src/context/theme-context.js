import React, { createContext, useContext } from 'react'
import { Appearance } from 'react-native'
import environment from '../environment'
import { colors } from '../styles/colors'


const ThemeContext = createContext(colors.light)

export const ThemeProvider = ({ children }) => {
  let colorScheme = environment.COLOR_SCHEME ? environment.COLOR_SCHEME : Appearance.getColorScheme()

  return (
    <ThemeContext.Provider value={colorScheme == 'dark' ? colors.dark : colors.light}>
      { children }
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)