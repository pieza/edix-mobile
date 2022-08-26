import React from 'react'
import { StyleSheet, Modal as RNModal, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { Text } from '@react-native-material/core'

import { useApp } from '../../../context/app-context'
import { useTheme } from '../../../context/theme-context'

import Button from '../../buttons/Button'

const AlertModal = props => {
  const theme = useTheme()
  const app = useApp()

  const { style } = props
  const { isAlertVisible = true, hideAlert, alertContent } = app
  const { type, title, body, buttonText, callback } = alertContent

  const fontColor = theme.main_text
  let color = theme.primary
  let icon = null

  switch(type) {
    case 'warning':
      color = theme.warning
      icon = 'alert-triangle'
      break
    
    case 'error':
      color = theme.danger
      icon = 'x'
      break

    case 'success':
      color = theme.success
      icon = 'check'
      break

    case 'info':
      color = theme.info
      icon = 'info'
      break
  }

  const submit = () => {
    if(callback) callback()
    hideAlert()
  }

  return(

    <RNModal
      animationType="fade"
      transparent={true}
      visible={isAlertVisible}
      onRequestClose={() => {
        hideAlert()
      }}
    >
      <View style={styles.container}>
        <View style={StyleSheet.flatten([styles.alertView, { backgroundColor:  theme.white, shadowColor: theme.black }, style])}>
          { icon ? 
            <View style={StyleSheet.flatten([styles.iconContainer, { borderColor: color }])}>
              <Feather name={icon} size={50} color={color} style={styles.icon}/> 
            </View>
          : null }
          <Text variant="h6" style={styles.title} color={fontColor}>{title}</Text>
          <Text variant="body1" style={styles.bodyText} color={fontColor} size="p2">{body}</Text>
          <Button onPress={submit} color={theme.primary}>{buttonText}</Button>
        </View>
      </View>
    </RNModal>

    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  alertView: {
    margin: 24,
    borderRadius: 24,
    padding: 43,
    alignItems: 'center',
    elevation: 5,
    width: '87.2%'
  },
  title: {
    marginBottom: 8
  },
  bodyText: {
    marginBottom: 24
  },
  iconContainer: {
    borderWidth:  4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 1000,
    marginBottom: 24
  }
})

export default AlertModal