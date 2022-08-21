import { StyleSheet, Image, View } from 'react-native'

const Loading = props => {
  const { style, isVisible = false } = props

  return (  
    isVisible && (
      <View
        {...props} 
        style={StyleSheet.flatten([styles.container, style])}>
        <Image style={styles.image} source={require('../../../assets/images/loading.gif')} />
      </View>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 150,
    height: 150
  }
})

export default Loading