import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../../context/theme-context'

import { Text } from '@react-native-material/core'
import { FontAwesome5 } from '@expo/vector-icons'
import StringUtils from '../../utils/string.utils'
import CircleButton from '../buttons/CircleButton'
import TextEditorModal from '../modals/util/TextEditorModal'
import { useState } from 'react'

const ItemCard = props => {
  const theme = useTheme()

  const { style, backgroundColor, children } = props

  let _backgroundColor = backgroundColor ? backgroundColor : theme.white

  return (
    <View style={StyleSheet.flatten([styles.itemCard, { backgroundColor: _backgroundColor }, style])}>
      {children}
    </View>
  )
}

const PropertyDetail = props => {
  const theme = useTheme()

  const { style, property } = props

  const [isNotesModalVisible, setIsNotesModalVisible] = useState(false)

  return (
    <>
      <View style={StyleSheet.flatten([styles.container, { backgroundColor: theme.white }, style])}>
        <ItemCard style={styles.textCard} backgroundColor={theme.success}>
          <FontAwesome5 style={styles.icon} name="map-marker-alt" size={20} color={theme.white} />
          <Text variant="body1" color={theme.white}>{property.province}, {property.canton}, {property.district}</Text>
        </ItemCard>

        <ItemCard style={styles.textCard} backgroundColor={theme.white}>
          <FontAwesome5 style={styles.icon} name="calendar-alt" size={20} color={theme.text} />
          <Text variant="body1" color={theme.text}>{StringUtils.toFullDateString(property.auctionDate)}</Text>
        </ItemCard>

        <View style={styles.row}>
          <ItemCard style={StyleSheet.flatten([styles.textCard, { marginRight: 2 }])} backgroundColor={theme.white}>
            <Text variant="body1" color={theme.text}>₡{StringUtils.toMoneyFormat(property?.basePrice)}</Text>
          </ItemCard>
          <ItemCard style={StyleSheet.flatten([styles.textCard, { marginLeft: 2 }])} backgroundColor={theme.white}>
            <FontAwesome5 style={styles.icon} name="ruler-horizontal" size={20} color={theme.text} />
            <Text variant="body1" color={theme.text}>{property.size} m2</Text>
          </ItemCard>
        </View>

        <TouchableOpacity onPress={() => setIsNotesModalVisible(true)}>
          <ItemCard style={styles.notesCard} backgroundColor={theme.white}>
            <Text variant="h6" color={theme.text}>Notas</Text>
            <Text variant="body1" color={theme.text}>{property.notes}</Text>
          </ItemCard>
        </TouchableOpacity>

        <ItemCard style={styles.multimediaCard} backgroundColor={theme.white}>
          <View style={styles.row}>
            <CircleButton color={theme.primary} fontColor={theme.white} icon="camera" />
            <CircleButton color={theme.primary} fontColor={theme.white} icon="video-camera" />

            <CircleButton color={theme.success} fontColor={theme.white} icon="plus" />

            <View>


            </View>
          </View>

        </ItemCard>
      </View>

      <TextEditorModal isVisible={isNotesModalVisible} setIsVisible={setIsNotesModalVisible}/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemCard: {
    flex: 1,
    width: '100%',
    padding: 16,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 6
  },
  textCard: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 15
  },
  notesCard: {
    marginBottom: 15,
    height: 150
  },
  multimediaCard: {
    marginBottom: 15,
    height: 300
  },
  icon: {
    paddingRight: 12
  },
  row: {
    flexDirection: 'row',
  }
})


export default PropertyDetail