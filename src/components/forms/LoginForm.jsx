import { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { useTheme } from '../../context/theme-context'
import { useApp } from '../../context/app-context'
import { useAuth } from '../../context/auth-context'
import { useNavigation } from '@react-navigation/native'

import { TextInput, Text } from '@react-native-material/core'
import { FontAwesome } from '@expo/vector-icons'
import Button from '../buttons/Button'

const LoginForm = props => {
  const app = useApp()
  const auth = useAuth()
  const theme = useTheme()
  const navigation = useNavigation()

  const { style } = props

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submit = async () => {
    app.setIsLoading(true)
    const result = await auth.login(username, password)

    app.setIsLoading(false)

    if (!result || result.error) {
      app.showAlert({
        type: 'error',
        title: "Error",
        body: result.error || "Ocurrio un error.",
        buttonText: "Ok"
      })
    } else {
      navigation.navigate('Tour')
    }
  }

  return (
    <View
      {...props}
      style={StyleSheet.flatten([styles.container, { backgroundColor: theme.white }, style])}
    >
      <Image style={styles.logo} source={require('../../../assets/images/logo_2.png')} resizeMode='contain' />

      <Text style={styles.title} variant="h6" color={theme.success}>Acceso a miembros</Text>

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TextInput
          style={styles.input}
          label='Usuario'
          variant='standard'
          value={username}
          onChangeText={text => { setUsername(text) }}
          trailing={props => (
            <FontAwesome name="user-circle" {...props} color={theme.text} />
          )}
        />

        <TextInput
          style={styles.input}
          label='Contraseña'
          variant='standard'
          secureTextEntry={true}
          value={password}
          onChangeText={text => { setPassword(text) }}
          trailing={props => (
            <FontAwesome name="lock" {...props} color={theme.black} />
          )}
        />
      </View>

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button style={styles.button} icon="sign-in" color={theme.success} onPress={submit}>Ingresar</Button>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '80%',
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
    width: '100%',
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
    width: '70%',
    marginTop: 30,
    alignSelf: 'center',
  }
})


export default LoginForm