import React from 'react'
import { Image, Modal, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import ImageView from 'react-native-image-viewing'

const ImagePreviewModal = props => {
  const { isVisible, setIsVisible, imageUri } = props

  return (
    <ImageView
      images={[{ uri: imageUri }]}
      imageIndex={0}
      visible={isVisible}
      onRequestClose={() => setIsVisible(false)}
    />
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
    width: '70%',
    height: '80%',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
})

export default ImagePreviewModal