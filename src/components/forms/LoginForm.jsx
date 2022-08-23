import { StyleSheet, View, Image } from 'react-native'
import { useTheme } from '../../context/theme-context'

import { TextInput, Text } from '@react-native-material/core'
import { FontAwesome } from '@expo/vector-icons'
import Button from '../buttons/Button'

const LoginForm = props => {
  const theme = useTheme()
  const { style } = props

  return (
    <View
      {...props}
      style={StyleSheet.flatten([styles.container, { backgroundColor: theme.white }, style])}
    >
      <Image style={styles.logo} source={require('../../../assets/images/logo_2.png')} />

      <Text style={styles.title} variant="h6" color={theme.success}>Acceso a miembros</Text>

      <TextInput
        style={styles.input}
        label='Usuario'
        variant='standard'
        trailing={props => (
          <FontAwesome name="user-circle" color={theme.black} {...props} />
        )}
      />

      <TextInput
        style={styles.input}
        label='Contraseña'
        variant='standard'
        secureTextEntry={true}
        trailing={props => (
          <FontAwesome name="lock" color={theme.black} {...props} />
        )}
      />

      <Button style={styles.button} icon="sign-in" color={theme.success}>Ingresar</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '77%',
    alignSelf: 'center',
    borderRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 20,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  logo: {
    width: 300,
    height: 81,
    marginBottom: 15,
  },
  title: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  input: {
    marginBottom: 30,
  },
  button: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 50
  }
})


export default LoginForm