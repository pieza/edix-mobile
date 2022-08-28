import { useNavigation } from '@react-navigation/native'
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native'
import { useTheme } from '../../context/theme-context'
import Loading from '../utils/Loading'
import PropertyCard from './PropertyCard'

const Header = props => {
  const theme = useTheme()

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.children}</Text>
    </View>
  )
}

const PropertiesContainer = props => {
  const theme = useTheme()
  const navigation = useNavigation()

  const { style, properties, isLoading = false, onRefresh = () => {} } = props

  const onPropertyPress = property => {
    navigation.navigate('PropertyDetail', { property })
  }

  return (
    <ScrollView
      {...props}
      style={StyleSheet.flatten([styles.container, {backgroundColor: theme.white}, style])}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.list}>
          <Loading isVisible={isLoading}/>
          { properties && properties.length > 0 ? 
            properties.map(property => <PropertyCard style={styles.card} key={property.id} property={property} onPress={() => onPropertyPress(property)}/>) 
          : null }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    width: '95%',
    borderRadius: 10,
    shadowOffset: { width: 0, height: 8 },   
    shadowOpacity: 0.2,  
    shadowRadius: 6
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    boxSizing: 'border-box',
    paddingBottom: 7.5
  },
  card: {
    marginVertical: 10,
  }
})

export default PropertiesContainer