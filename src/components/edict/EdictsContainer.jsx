import { useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native'
import { useTheme } from '../../context/theme-context'
import EdictDetailModal from '../modals/edict/EdictDetailModal'
import Loading from '../utils/Loading'
import EdictCard from './EdictCard'

const Header = props => {
  const theme = useTheme()

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.children}</Text>
    </View>
  )
}

const EdictsContainer = props => {
  const theme = useTheme()

  const { style, edicts, isLoading = false, onRefresh = () => {} } = props

  const [isModalVisible, setIsModalVisible] = useState(false)

  const [selectedEdict, setSelectedEdict] = useState(null)

  const onEdictPress = edict => {
    setSelectedEdict(edict)
    setIsModalVisible(true)
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
          { edicts && edicts.length > 0 ? 
            edicts.map(edict => <EdictCard style={styles.card} key={edict.id} edict={edict} onPress={() => onEdictPress(edict)}/>) 
          : null }
      </View>

      <EdictDetailModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} edict={selectedEdict}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    width: '90%',
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

export default EdictsContainer