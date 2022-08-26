import { NavigationContainer } from '@react-navigation/native'

import { ThemeProvider } from './src/context/theme-context'

import MainRoutes from './src/routes/MainRoutes'
import { AppProvider } from './src/context/app-context'
import LoadingModal from './src/components/modals/util/LoadingModal'
import { AuthProvider } from './src/context/auth-context'
import AlertModal from './src/components/modals/util/AlertModal'

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppProvider>
          <NavigationContainer>
            <MainRoutes />
            <AlertModal />
            <LoadingModal />
          </NavigationContainer>
        </AppProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}