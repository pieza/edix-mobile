import { StyleSheet, TextInput } from 'react-native'
import { useTheme } from '../../context/theme-context'

const FormTextInput = () => {
  const { theme } = useTheme()

  return (
    <TextInput 
        placeholderTextColor={theme.outline}
        onBlur={validate}
        {...props}
        style={StyleSheet.flatten([styles.input, { 
          color: theme.main_text 
        }])}
      />
  )
}

const styles = StyleSheet.create({
  input: {
    
  }
})


export default FormTextInput