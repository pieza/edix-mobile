import React from 'react'
import { Image, Modal, StyleSheet, View } from 'react-native'
import { useApp } from '../../context/app-context'

const LoadingModal = props => {
  const app = useApp()

  const { isLoading, setIsLoading } = app

  return(
    <Modal
      animationType="fade"
      transparent={true}
      visible={isLoading}
      onRequestClose={() => {
        setIsLoading(false)
      }}>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../../../assets/images/loading_2.gif')} />
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  image: {
    width: 150,
    height: 150
  }
})

export default LoadingModal