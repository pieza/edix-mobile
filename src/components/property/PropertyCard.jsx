import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from '@react-native-material/core'
import { FontAwesome5 } from '@expo/vector-icons'
import { useTheme } from '../../context/theme-context'

import React from 'react'
import CircleButton from '../buttons/CircleButton'
import StringUtils from '../../utils/string.utils'

const PropertyTitle = props => {
  const theme = useTheme()
  const { style, children } = props
  return (
    <View style={StyleSheet.flatten([styles.title, { backgroundColor: theme.success }, style])}>
      <Text variant='h5' color={theme.white}>{children}</Text>
    </View>
  )
}

const PropertyCard = props => {
  const theme = useTheme()

  const { style, property } = props

  return (
    <TouchableOpacity 
      {...props}
      style={StyleSheet.flatten([styles.card, { backgroundColor: theme.white }, style])}>

        <PropertyTitle>₡{StringUtils.toMoneyFormat(property?.basePrice)}</PropertyTitle>

        <View style={styles.textContainer}>
          <FontAwesome5 style={styles.textIcon} name='map-marker-alt' size={20} color={theme.text} />
          <Text variant='body1' color={theme.text}>{property?.province}, {property?.canton}</Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textContainer}> 
            <FontAwesome5 style={styles.textIcon} name='calendar-alt' size={20} color={theme.text} />
            <Text variant='body1' color={theme.text}>{StringUtils.toDateString(property?.auctionDate)}</Text>
          </View>
          <View style={styles.textContainer}> 
            <FontAwesome5 style={styles.textIcon} name='ruler-horizontal' size={20} color={theme.text} />
            <Text variant='body1' color={theme.text}>{property?.size} m2</Text>
          </View>
        </View>
        <CircleButton style={styles.button} icon="check" fontColor={theme.success} border/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '85%',
    height: 250,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 0 },   
    shadowOpacity: 0.2,  
    shadowRadius: 6
  },
  title: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 42,
    borderRadius: 25,
    padding: 5,
    marginBottom: 40,
    shadowOffset: { width: 0, height: 8 },   
    shadowOpacity: 0.2,  
    shadowRadius: 10
  },
  textContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  textIcon: {
    marginRight: 5
  },
  button: {
    marginTop: 15,
  }
})

export default PropertyCard