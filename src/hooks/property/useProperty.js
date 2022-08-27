import { useCallback, useState } from 'react'
import { useApp } from '../../context/app-context'

import propertyService from '../../services/property.service'

const useProperty = (initialValue) => {
  const app = useApp()
  const [property, setProperty] = useState(initialValue)

  const save = useCallback(() => {
    app.setIsLoading(true)
    propertyService.savePropertyChanges(property)
      .then(result => {
        setProperty(result.data)
      })
      .catch(err => {
        console.error(err)
        app.showAlert({
          type: 'error',
          title: "Error",
          body: err.message || "No se pudo guardar la propiedad.",
          buttonText: "Ok"
        })
      }).finally(() => {
        app.setIsLoading(false)
      })
  }, [])

  return { property, setProperty, save }
}

export default useProperty