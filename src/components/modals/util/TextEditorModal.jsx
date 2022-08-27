import { StyleSheet, Modal, View, ScrollView } from 'react-native'
import { useTheme } from '../../../context/theme-context'

import { Text, Button } from '@react-native-material/core'
import MultilineTextInput from '../../inputs/MultilineTextInput'
import { useState } from 'react'

const TextEditorModal = props => {
  const theme = useTheme()

  const { style, onSave, isVisible, setIsVisible, title, value } = props

  const [text, setText] = useState(value)

  const submit = () => {
    if(onSave) onSave(text)
    setIsVisible(false)
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
          <Text style={styles.input} variant="h6" color={theme.text}>{title || "Editar valor"}</Text>

          <MultilineTextInput style={styles.input} value={text} onChangeText={setText}/>

          <View style={styles.footer}>
            <Button style={styles.button} color={theme.white} tintColor={theme.text} title="Cerrar" onPress={() => setIsVisible(false)}/>
            <Button style={styles.button} color={theme.primary} tintColor={theme.white} title="Ok" onPress={submit}/>
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
    elevation: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
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

export default TextEditorModal