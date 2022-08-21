import { StyleSheet, View } from "react-native"
import { useTheme } from "../../context/theme-context"

const Footer = props => {
  const theme = useTheme()

  const { style } = props

  return (
    <View style={StyleSheet.flatten([styles.footer, {backgroundColor: theme.primary}, style])}></View>
  )
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: '20%',
  }
})

export default Footer