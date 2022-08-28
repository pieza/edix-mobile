import { StyleSheet, TextInput } from 'react-native'
import { useTheme } from '../../context/theme-context'

const MultilineTextInput = props => {
  const theme = useTheme()

  const { style } = props

  return (
    <TextInput
      {...props}
      blurOnSubmit={true}
      multiline
      style={StyleSheet.flatten([styles.input, { borderColor: theme.outline }, style])}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    width: '100%',
    padding: 10,
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 5,
  }
})

export default MultilineTextInput