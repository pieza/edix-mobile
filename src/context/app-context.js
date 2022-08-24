import React, { createContext, useContext, useState } from 'react'
import { Platform } from 'react-native'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalType, setModalType] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [modalBody, setModalBody] = useState('')
  const [modalButtonText, setModalButtonText] = useState('')
  const [modalCallback, setModalCallback] = useState(null) 

  const showModal = ({ type, title, body, buttonText, callback }) => {
    setModalType(type)
    setModalTitle(title)
    setModalBody(body)
    setModalButtonText(buttonText)
    setModalCallback(() => callback)
    setTimeout(()=> setIsModalVisible(true), Platform.OS === "ios" ? 1000 : 0) // weird fix for ios
  }

  const hideModal = () => {
    setIsModalVisible(false)
  }

  const context = {
    showModal,
    hideModal,
    isModalVisible,
    isLoading,
    setIsLoading,
    modalContent: {
      type: modalType,
      title: modalTitle,
      body: modalBody,
      buttonText: modalButtonText,
      callback: modalCallback
    }
  }

  return (
    <AppContext.Provider value={context}>
      { children }
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)