import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as SplashScreen from 'expo-splash-screen'

import { useTheme } from '../context/theme-context'

import Navbar from '../components/shared/Navbar'
import TourScreen from '../screens/TourScreen'
import LoginScreen from '../screens/LoginScreen'
import { useAuth } from '../context/auth-context'

SplashScreen.preventAutoHideAsync()
const Stack = createNativeStackNavigator()

const MainRoutes = () => {
  const auth = useAuth()
  const theme = useTheme()

  const screenOptions = {
    headerStyle: {
      backgroundColor: theme.primary,
    },
    headerTintColor: theme.primary,
    headerTitle: props => <Navbar {...props}/>
  }

  if(auth.user === 'not-loaded') {
    return null
  } else if(auth.user) {
    SplashScreen.hideAsync()
    return (
      <Stack.Navigator
        screenOptions={screenOptions}>
        <Stack.Screen name="Tour" component={TourScreen}/>
      </Stack.Navigator>
    )
  } else {
    SplashScreen.hideAsync()
    return (
      <Stack.Navigator
        screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <Stack.Navigator
      screenOptions={screenOptions}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Tour" component={TourScreen}/>
    </Stack.Navigator>
  )
}

export default MainRoutes