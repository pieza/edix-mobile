import { useState } from 'react'
import { StyleSheet, Modal, View, ScrollView } from 'react-native'
import { useTheme } from '../../../context/theme-context'
import EdictDetail from '../../edict/EdictDetail'
import Button from '../../buttons/Button'
import TextEditorModal from '../util/TextEditorModal'

const EdictDetailModal = props => {
  const theme = useTheme()

  const { style, onSave, isVisible, setIsVisible, edict } = props

  const [isRawTextModalVisible, setIsRawTextModalVisible] = useState(false)

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
        <View style={StyleSheet.flatten([styles.content, { backgroundColor: theme.white }])}>
          <ScrollView style={styles.body}>
            <EdictDetail style={styles.edictDetail} edict={edict} />
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
            <Button style={styles.button} color={theme.white} fontColor={theme.text} onPress={() => setIsVisible(false)}>Cerrar</Button>
            <Button style={styles.button} color={theme.success} fontColor={theme.white} onPress={submit}>Guardar</Button>
          </View>
        </View>
      </View>

      <TextEditorModal isVisible={isRawTextModalVisible} setIsVisible={setIsRawTextModalVisible} value={edict?.rawText}/>
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
    flex: 0.8,
    borderRadius: 5,
    width: '90%',
    elevation: 5,
  },
  body: {
    flex: 0.8,
    padding: 15,
  },
  footer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  edictDetail: {
    flex: 1
  },
  button: {
    marginHorizontal: 2
  }
})

export default EdictDetailModal