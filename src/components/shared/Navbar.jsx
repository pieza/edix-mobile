import { StyleSheet, Image, View } from "react-native"
import { useTheme } from "../../context/theme-context"

const Navbar = props => {
  const theme = useTheme()

  const { style } = props

  return (
    <View style={StyleSheet.flatten([styles.navbar, {backgroundColor: theme.primary }, style])}>
      <Image style={styles.image} source={require("../../../assets/images/logo.png")} />
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'right',
    justifyContent: 'center',
    backgroundColor: 'red',
    paddingVertical: 5,
  },
  image: {
    width: 288 / 2,
    height: 69.45 / 2
  }
})

export default Navbar