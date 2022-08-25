import { NavigationContainer } from '@react-navigation/native'

import { ThemeProvider } from './src/context/theme-context'

import MainRoutes from './src/routes/MainRoutes'
import { AppProvider } from './src/context/app-context'
import LoadingModal from './src/components/modals/LoadingModal'

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <NavigationContainer>
          <MainRoutes />
          <LoadingModal />
        </NavigationContainer>
      </AppProvider>
    </ThemeProvider>
  )
}