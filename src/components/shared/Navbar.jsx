import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useTheme } from '../../context/theme-context'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'

export const Logo = props => {

  return (
    <Image style={styles.image} source={require("../../../assets/images/logo.png")} />
  )
}

export const GoBackButton = props => {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      {...props}
      onPress={() => navigation.pop()}
    >
      <FontAwesome name="angle-left" size={35} color={theme.white} />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  image: {
    width: 288 / 2,
    height: 69.45 / 2
  }
})