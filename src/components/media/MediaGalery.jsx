import { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button } from '@react-native-material/core'
import * as ImagePicker from 'expo-image-picker'
import { FontAwesome } from '@expo/vector-icons'
import ImageGaleryItem from './ImageGaleryItem'
import { useTheme } from '../../context/theme-context'
import MediaPickerButton from './MediaPickerButton'
import CameraLauncherButton from './CameraLauncherButton'
import VideoGaleryItem from './VideoGaleryItem'

const MediaGalery = props => {
  const theme = useTheme()
  const [selectedMediaType, setSelectedMediaType] = useState(ImagePicker.MediaTypeOptions.Images)

  const { style, setProperty, images = ['https://i.ytimg.com/vi/Nk2M7ISVB04/maxresdefault.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAw3Ufl1UTpD2SKfehMASlmAy2J-91_Hqovw&usqp=CAU'], videos = ['https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'] } = props

  const toggleMediaType = () => {
    setSelectedMediaType(selectedMediaType === ImagePicker.MediaTypeOptions.Images ? ImagePicker.MediaTypeOptions.Videos : ImagePicker.MediaTypeOptions.Images)
  }

  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      <View style={styles.header}>
        <View>
          <Button
            color={theme.primary}
            leading={
              <FontAwesome 
                name={selectedMediaType === ImagePicker.MediaTypeOptions.Images ? 'image' : 'video-camera'}
                size={20} 
                color={theme.white}
              />}
            title={selectedMediaType === ImagePicker.MediaTypeOptions.Images ? 'Imágenes' : 'Videos'}
            onPress={toggleMediaType}
          />
        </View>
        <View style={{ flexDirection: 'row'}}>
          <MediaPickerButton
            icon="image"
            color={theme.success}
            fontColor={theme.white}
            mediaTypes={selectedMediaType}
          />
          <CameraLauncherButton
            icon={selectedMediaType === ImagePicker.MediaTypeOptions.Images ? 'camera' : 'video-camera'}
            color={theme.success}
            fontColor={theme.white}
            mediaTypes={selectedMediaType}
          />
        </View>
      </View>

      {selectedMediaType == ImagePicker.MediaTypeOptions.Images ?
        <ScrollView style={styles.tab}>
          {images?.map(i => <ImageGaleryItem key={i} uri={i} />)}
        </ScrollView>
        :
        <ScrollView style={styles.tab}>
          {videos?.map(i => <VideoGaleryItem key={i} uri={i} />)}
        </ScrollView>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 250,
  },
  tab: {
    flex: 1,
    height: 250,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 6
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  }
})

export default MediaGalery