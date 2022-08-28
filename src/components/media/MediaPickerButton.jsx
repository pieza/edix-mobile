import * as ImagePicker from 'expo-image-picker'
import { StyleSheet } from 'react-native'
import CircleButton from '../buttons/CircleButton'

const MediaPickerButton = props => {

  const { style, onPick, onCancel, mediaTypes = ImagePicker.MediaTypeOptions.Images } = props

  const pickMedia = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes,
      //allowsEditing: true,
      //aspect: [4, 3],
      base64: true,
      quality: 1,
    })

    if (result.cancelled === true) {
      if (onCancel) onCancel()
      return
    }

    if(onPick) onPick(`data:image/jpeg;base64,${result.base64}`)  
  }

  return (
    <CircleButton 
      {...props}
      onPress={pickMedia}
      style={StyleSheet.flatten([style])}
    />
  )
}

export default MediaPickerButton