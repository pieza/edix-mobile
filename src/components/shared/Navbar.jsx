import React, { useState } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useTheme } from '../../context/theme-context'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import UserModal from '../modals/user/UserModal'

export const Logo = props => {

  return (
    <Image style={styles.image} source={require("../../../assets/images/logo.png")} />
  )
}

export const GoBackButton = props => {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      {...props}
      onPress={() => navigation.pop()}
    >
      <FontAwesome name="angle-left" size={35} color={theme.white} />
    </TouchableOpacity>
  )
}

export const UserButton = props => {
  const theme = useTheme()
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <TouchableOpacity
        {...props}
        onPress={() => setIsVisible(true)}
      >
        <FontAwesome name="user-circle" size={35} color={theme.white} />
      </TouchableOpacity>
      <UserModal setIsVisible={setIsVisible} isVisible={isVisible} />
    </>
    
  )
}

const styles = StyleSheet.create({
  image: {
    width: 288 / 2,
    height: 69.45 / 2
  }
})