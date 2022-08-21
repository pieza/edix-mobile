import { RefreshControl, ScrollView, StyleSheet, View } from "react-native"
import { useTheme } from "../../context/theme-context"
import Loading from "../utils/Loading"
import EdictCard from "./EdictCard"

const EdictsContainer = props => {
  const theme = useTheme()

  const { style, edicts, isLoading = false, onRefresh = () => {} } = props

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
            edicts.map(edict => <EdictCard style={styles.card} key={edict.id} edict={edict} />) 
          : null }
      </View>
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
    shadowRadius: 6,  
    elevation: 20
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