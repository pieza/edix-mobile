import { useEffect, useCallback } from 'react'
import { SafeAreaView } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import { ThemeProvider } from './src/context/theme-context'

import { useFonts } from 'expo-font'
import fonts from './src/styles/fonts'

import * as SplashScreen from 'expo-splash-screen'
import MainRoutes from './src/routes/MainRoutes'

export default function App() {
  let [fontsLoaded] = useFonts(fonts)

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
    
    prepare()
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider>
        <NavigationContainer>
          <MainRoutes />
        </NavigationContainer>
    </ThemeProvider>
  )
}