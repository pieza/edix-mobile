import { StyleSheet, SafeAreaView, View } from 'react-native'
import { useTheme } from '../../context/theme-context'
import Footer from '../shared/Footer'

const Screen = props => {
  const theme = useTheme()

  return (
    <SafeAreaView
      {...props}
      style={StyleSheet.flatten([styles.page, { backgroundColor: theme.background }])}
    >
      <View style={styles.content}>
        {props.children}
      </View>
      <Footer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  content: {
    flex: 0.9,
    minHeight: '94%',
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  footer: {
    flex: 0.1,
  }
})

export default Screen