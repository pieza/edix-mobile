import { useEffect, useState } from 'react'
import { useApp } from '../../context/app-context'

import propertyService from '../../services/property.service'

const useTourProperties = () => {
  const app = useApp()
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
        app.showAlert({
          type: 'error',
          title: "Error",
          body: err.message || "Ocurrio un error.",
          buttonText: "Ok"
        })
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