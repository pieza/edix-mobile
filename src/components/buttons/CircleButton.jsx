import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '../../context/theme-context'

import { FontAwesome } from '@expo/vector-icons'

const CircleButton = props => {
  const theme = useTheme()
  const { style, color, fontColor, icon, border } = props

  const bgColor = color ? color : theme.white
  const textColor = fontColor ? fontColor : theme.primary

  return(
    <TouchableOpacity
      {...props}
      style={StyleSheet.flatten([styles.button, { backgroundColor: bgColor, borderColor: textColor, borderWidth: border ? 5 : 0 }, style])}
    > 
      { icon ? <FontAwesome name={icon} size={24} color={textColor} style={styles.icon}/> : null }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 1000,
  }
})

export default CircleButton