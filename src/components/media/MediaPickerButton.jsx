import { StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
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

    let encodedFile = result.base64
    let dataType = 'data:image/jpeg;base64,'

    if(mediaTypes === ImagePicker.MediaTypeOptions.Videos) {
      encodedFile = await FileSystem.readAsStringAsync(result.uri, { encoding: FileSystem.EncodingType.Base64 })
      dataType = 'data:video/mp4;base64,'
    }

    if(onPick) onPick(`${dataType}${encodedFile}`)  
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