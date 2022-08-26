import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import authService from '../services/auth.service'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('not-loaded')

  const login = async (username, password) => {
    try {
      const response = await authService.login(username, password)
      const loginData = response?.data?.loginData
      console.log("loginData:", loginData)
      if(loginData) {
        await AsyncStorage.setItem('token', loginData.token)
        await AsyncStorage.setItem('userName', loginData.userName)
        setUser(await getLoggedUser())
        return true
      } else if(response?.data?.loginState === 'IncorrectCredentials') {
        return { error: 'Credenciales inválidas.' }
      }      
    } catch(err) {
      console.error(err.message)
      return { error: err.message }
    }
  }

  const logout = async () => {
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('userName')
    setUser(null)
    return true
  }

  const getLoggedUser = async () => {
    try {
      const token = await AsyncStorage.getItem('token')
      if(!token) return null

      return {
        userName: await AsyncStorage.getItem('userName'),
      }
    } catch (err) {
      return null
    } 
  }

  const refreshUser = async () => {
    setUser(await getLoggedUser())
  }

  const context = {
    login,
    logout,
    user,
    refreshUser
  }

  useEffect(() => {
    logout()
    refreshUser()
  }, [])

  return (
    <AuthContext.Provider value={context}>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)