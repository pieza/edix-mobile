import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import { StyleSheet } from 'react-native'
import { useApp } from '../../context/app-context'
import CircleButton from '../buttons/CircleButton'

const CameraLauncherButton = props => {
  const app = useApp()

  const { style, onPick, onCancel, mediaTypes = ImagePicker.MediaTypeOptions.Images } = props

  const getPermissions = async () => {
    const permissions = await ImagePicker.getCameraPermissionsAsync()
    if (permissions.granted === false) {
      if(permissions.canAskAgain === true) {
        const request = await ImagePicker.requestCameraPermissionsAsync()
        return request.granted
      }
      return false
    }
    return true
  }

  const launchCamera = async () => {
    const permissions = await getPermissions()

    if(!permissions) {
      return app.showAlert({
        type: 'error',
        title: 'Permisos requeridos',
        body: 'Se necesitan permisos para acceder a la camara.',
        buttonText: 'OK'
      })
    }

    let result = await ImagePicker.launchCameraAsync({
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
      onPress={launchCamera}
      style={StyleSheet.flatten([style])}
    />
  )
}

export default CameraLauncherButton