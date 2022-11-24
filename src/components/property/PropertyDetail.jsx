import { StyleSheet, TouchableOpacity, View, ScrollView, Linking } from 'react-native'
import { useTheme } from '../../context/theme-context'
import { showLocation } from 'react-native-map-link'

import { Text } from '@react-native-material/core'
import { FontAwesome5 } from '@expo/vector-icons'
import StringUtils from '../../utils/string.utils'
import TextEditorModal from '../modals/util/TextEditorModal'
import { useState } from 'react'
import Button from '../buttons/Button'
import useProperty from '../../hooks/property/useProperty'
import ItemCard from './ItemCard'
import MediaGalery from '../media/MediaGalery'
import Loading from '../utils/Loading'

const PropertyDetail = props => {
  const theme = useTheme()

  const { style, id } = props

  const { property, setProperty, isFetching, save } = useProperty(id)

  const [isNotesModalVisible, setIsNotesModalVisible] = useState(false)
  const [isRawTextModalVisible, setIsRawTextModalVisible] = useState(false)

  const handleLocationPress = () => {
    Linking.openURL(property?.locationLink)
    // showLocation({
    //   latitude: property?.latitude,
    //   longitude: property?.longitude,
    //   title: property?.address,
    //   dialogTitle: 'Abrir en',
    //   dialogMessage: 'Abrir en',
    //   cancelText: 'Cancelar'
    // })
  }
  return (
    <View style={StyleSheet.flatten([styles.container, { backgroundColor: theme.white }, style])}>
      <Loading isVisible={isFetching} />
      {!isFetching && property ?
        <>
          <ScrollView style={styles.body}>

            <TouchableOpacity onPress={handleLocationPress}>
              <ItemCard style={styles.textCard} backgroundColor={theme.success}>
                <FontAwesome5 style={styles.icon} name="map-marker-alt" size={20} color={theme.white} />
                <Text variant="body1" color={theme.white}>{property?.province}, {property?.canton}, {property?.district}</Text>
              </ItemCard>
            </TouchableOpacity>

            <ItemCard style={styles.textCard} backgroundColor={theme.white}>
              <FontAwesome5 style={styles.icon} name="calendar-alt" size={20} color={theme.text} />
              <Text variant="body1" color={theme.text}>{StringUtils.toFullDateString(property?.auctionDate)}</Text>
            </ItemCard>

            <View style={styles.row}>
              <ItemCard style={StyleSheet.flatten([styles.textCard, { marginRight: 2 }])} backgroundColor={theme.white}>
                <Text variant="body1" color={theme.text}>₡{StringUtils.toMoneyFormat(property?.basePrice)}</Text>
              </ItemCard>
              <ItemCard style={StyleSheet.flatten([styles.textCard, { marginLeft: 2 }])} backgroundColor={theme.white}>
                <FontAwesome5 style={styles.icon} name="ruler-horizontal" size={20} color={theme.text} />
                <Text variant="body1" color={theme.text}>{property?.size} m2</Text>
              </ItemCard>
            </View>

            <TouchableOpacity onPress={() => setIsNotesModalVisible(true)}>
              <ItemCard style={styles.notesCard} backgroundColor={theme.white}>
                <Text variant="h6" color={theme.text}>Notas</Text>
                <Text variant="body1" color={theme.text}>{property?.notes}</Text>
              </ItemCard>
            </TouchableOpacity>

            <ItemCard style={styles.multimediaCard} backgroundColor={theme.white}>
              <MediaGalery images={property?.images} videos={property?.videos} setProperty={setProperty} />
            </ItemCard>
          </ScrollView>

          <View style={styles.footer}>
            <Button
              style={styles.button}
              icon="eye"
              color={theme.white}
              fontColor={theme.text}
              onPress={() => setIsRawTextModalVisible(true)}
            >
              Edicto
            </Button>
            <Button style={styles.button} color={theme.success} fontColor={theme.white} onPress={save}>Guardar</Button>
          </View>
        </>
        : null}
      <TextEditorModal
        isVisible={isRawTextModalVisible}
        setIsVisible={setIsRawTextModalVisible}
        value={property?.rawText}
        onSave={text => setProperty({ ...property, rawText: text })}
      />
      <TextEditorModal
        isVisible={isNotesModalVisible}
        setIsVisible={setIsNotesModalVisible}
        value={property?.notes}
        onSave={text => setProperty({ ...property, notes: text })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 0.8,
    padding: 15,
  },
  footer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  propertyDetail: {
    flex: 1
  },
  button: {
    marginHorizontal: 2
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