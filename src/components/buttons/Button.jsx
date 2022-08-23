import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '../../context/theme-context'

import { FontAwesome } from '@expo/vector-icons'
import { Text } from '@react-native-material/core'

const Button = props => {
  const theme = useTheme()
  const { style, color, fontColor, icon, border } = props

  const bgColor = color ? color : theme.primary
  const textColor = fontColor ? fontColor : theme.white

  return(
    <TouchableOpacity
      {...props}
      style={StyleSheet.flatten([styles.button, { backgroundColor: bgColor, borderColor: theme.outline, borderWidth: border ? 1 : 0 }, style])}
    > 
      { icon ? <FontAwesome name={icon} size={24} color={textColor} style={styles.icon}/> : null }
      <Text color={textColor} variant="h6" >
        { props.children }
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 56,
    borderRadius: 32,
  },
  icon: {
    paddingRight: 12
  }
})

export default Button