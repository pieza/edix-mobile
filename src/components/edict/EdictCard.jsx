import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../../context/theme-context'

const EdictCard = props => {
  const theme = useTheme()

  const { style, edict } = props

  return (
    <TouchableOpacity 
      {...props}
      style={StyleSheet.flatten([styles.card, { backgroundColor: theme.white }, style])}>
        <Text>{edict.id}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '85%',
    height: 250,
    borderRadius: 25,
    padding: 5,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 8 },   
    shadowOpacity: 0.2,  
    shadowRadius: 6,  
    elevation: 20
  },
  title: {

  }
})

export default EdictCard