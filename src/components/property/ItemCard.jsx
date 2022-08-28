import { StyleSheet, View } from 'react-native'
import { useTheme } from '../../context/theme-context'


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

const styles = StyleSheet.create({
  itemCard: {
    flex: 1,
    width: '100%',
    padding: 16,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 6
  }
})

export default ItemCard