import { StyleSheet, Modal, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '../../../context/theme-context'
import { useAuth } from '../../../context/auth-context'

import { Text, Button } from '@react-native-material/core'

const UserModal = props => {
  const auth = useAuth()
  const theme = useTheme()
  const navigation = useNavigation()

  const { style, isVisible, setIsVisible } = props

  const handleLogout = () => {
    auth.logout()
    setIsVisible(false)
    navigation.navigate('Login')
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setIsVisible(false)
      }}
    >
      <View style={styles.container}>
        <View style={StyleSheet.flatten([styles.content, { backgroundColor: theme.white }, style])}>
          <Text style={styles.input} variant="h6" color={theme.text}>Usuario: {auth.user?.userName}</Text>

          <Button style={styles.button} color={theme.primary} tintColor={theme.white} title="Cerrar Sesion" onPress={handleLogout} />

          <View style={styles.footer}>
            <Button style={styles.button} color={theme.white} tintColor={theme.text} title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    elevation: 20
  },
  content: {
    flex: 0.6,
    borderRadius: 5,
    width: '80%',
    maxHeight: '30%',
    elevation: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row'
  },
  title: {
    marginBottom: 10
  },
  input: {
    marginBottom: 30,
  },
  button: {
    marginHorizontal: 20
  }
})

export default UserModal