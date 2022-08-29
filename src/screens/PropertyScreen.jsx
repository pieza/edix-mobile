import { StyleSheet, ScrollView, View } from 'react-native'

import Screen from '../components/layouts/Screen'
import PropertyDetail from '../components/property/PropertyDetail'
import { useTheme } from '../context/theme-context'



const PropertyScreen = props => {
  const theme = useTheme()

  const { style, route } = props

  const { id } = route.params

  return (
    <Screen>
      <View style={StyleSheet.flatten([styles.content, { backgroundColor: theme.white }, style])}>
        <PropertyDetail style={styles.propertyDetail} id={id} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    borderRadius: 5,
    width: '95%',
    alignSelf: 'center',
    elevation: 5,
  }
})

export default PropertyScreen