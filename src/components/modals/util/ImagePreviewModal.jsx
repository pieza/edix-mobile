import React from 'react'
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

export default ImagePreviewModal