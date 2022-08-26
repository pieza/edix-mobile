import React, { createContext, useContext, useState } from 'react'
import { Platform } from 'react-native'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isAlertVisible, setIsAlertVisible] = useState(false)
  const [alertType, setAlertType] = useState('')
  const [alertTitle, setAlertTitle] = useState('')
  const [alertBody, setAlertBody] = useState('')
  const [alertButtonText, setAlertButtonText] = useState('')
  const [alertCallback, setAlertCallback] = useState(null) 

  const showAlert = ({ type, title, body, buttonText, callback }) => {
    setAlertType(type)
    setAlertTitle(title)
    setAlertBody(body)
    setAlertButtonText(buttonText)
    setAlertCallback(() => callback)
    setTimeout(()=> setIsAlertVisible(true), Platform.OS === "ios" ? 1000 : 0) // weird fix for ios
  }

  const hideAlert = () => {
    setIsAlertVisible(false)
  }

  const context = {
    showAlert,
    hideAlert,
    isAlertVisible,
    isLoading,
    setIsLoading,
    alertContent: {
      type: alertType,
      title: alertTitle,
      body: alertBody,
      buttonText: alertButtonText,
      callback: alertCallback
    }
  }

  return (
    <AppContext.Provider value={context}>
      { children }
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)