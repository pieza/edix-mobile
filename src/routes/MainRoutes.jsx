import { TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as SplashScreen from 'expo-splash-screen'
import { FontAwesome } from '@expo/vector-icons'
import { useTheme } from '../context/theme-context'
import { useNavigation } from '@react-navigation/native'

import Navbar, { GoBackButton, Logo } from '../components/shared/Navbar'
import TourScreen from '../screens/TourScreen'
import LoginScreen from '../screens/LoginScreen'
import { useAuth } from '../context/auth-context'
import PropertyScreen from '../screens/PropertyScreen'

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
    headerTitle: props => <Logo {...props}/>
  }

  if(auth.user === 'not-loaded') {
    return null
  } else if(auth.user) {
    SplashScreen.hideAsync()
    return (
      <Stack.Navigator>
        <Stack.Screen name="Tour" component={TourScreen}  options={screenOptions} />
        <Stack.Screen name="PropertyDetail" component={PropertyScreen} options={{...screenOptions, headerLeft: props => <GoBackButton {...props}/>}}/>
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
}

export default MainRoutes