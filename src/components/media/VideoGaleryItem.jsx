import { useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av'

const VideoGaleryItem = props => {
  const { style, uri } = props

  const video = useRef(null)

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertial: 10,
    borderRadius: 10,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 6
  },
  video: {
    borderRadius: 10,
    alignSelf: 'center',
    width: '100%',
    height: 150,
  }
})

export default VideoGaleryItem