import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useTheme } from '../context/theme-context'

import Navbar from '../components/shared/Navbar'
import TourScreen from '../screens/TourScreen'
import LoginScreen from '../screens/LoginScreen'


const Stack = createNativeStackNavigator()

const MainRoutes = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.primary,
        },
        headerTintColor: theme.primary,
        headerTitle: props => <Navbar {...props}/>
      }}>

      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Tour" component={TourScreen}/>
      
    </Stack.Navigator>
  )
}

export default MainRoutes