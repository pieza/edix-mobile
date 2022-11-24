import { useState } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import ImagePreviewModal from '../modals/util/ImagePreviewModal'

const ImageGaleryItem = props => {
  const { style, uri } = props

  const [isPreviewVisible, setIsPreviewVisible] = useState(false)

  return (
    <>
      <TouchableOpacity onPress={() => setIsPreviewVisible(true)}>
        <Image source={{ uri: uri }} style={StyleSheet.flatten([styles.image, style])} />
      </TouchableOpacity>
      <ImagePreviewModal imageUri={uri} isVisible={isPreviewVisible} setIsVisible={setIsPreviewVisible} />
    </>

  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 6
  }
})

export default ImageGaleryItem