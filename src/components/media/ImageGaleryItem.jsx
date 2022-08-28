import { StyleSheet, Image } from 'react-native'

const ImageGaleryItem = props => {
  const { style, uri } = props 

  return (
    <Image source={{ uri: uri }} style={StyleSheet.flatten([styles.image, style])} />
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