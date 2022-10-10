import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useApp } from '../../context/app-context'
import { useAuth } from '../../context/auth-context'

import propertyService from '../../services/property.service'

const useTourProperties = () => {
  const app = useApp()
  const auth = useAuth()
  const navigation = useNavigation()
  const [properties, setProperties] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const fetchProperties = () => {
    setIsFetching(true)
    propertyService.getPropertiesOnTour()
      .then(result => {
        setProperties(result.data)
      })
      .catch(err => {
        console.error(err)
        if(err?.response?.status === 401) { 
          auth.logout()
          navigation.navigate('Login')
        } else {
          app.showAlert({
            type: 'error',
            title: "Error",
            body: err.message || "Ocurrio un error.",
            buttonText: "Ok"
          })
        }
        setProperties([])
      })
      .finally(() => {
        setIsFetching(false)
      })
  }

  useEffect(() => {
    fetchProperties()
  }, [])

  return { properties, isFetching, fetchProperties }
}

export default useTourProperties