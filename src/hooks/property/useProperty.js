import { useCallback, useEffect, useState } from 'react'
import { useApp } from '../../context/app-context'

import propertyService from '../../services/property.service'

const useProperty = (id) => {
  const app = useApp()
  const [property, setProperty] = useState({})
  const [isFetching, setIsFetching] = useState(false)

  const fetchProperty = useCallback(async () => {
    try {
      setIsFetching(true)
      const result = await propertyService.getProperty(id)
      setProperty(result.data)
      setProperty(p => ({ ...p, images: p.images || [], videos: p.videos || [] }))
      setIsFetching(false)
    } catch (error) {
      console.error(error)
      app.showAlert({
        type: 'error',
        title: "Error",
        body: error.message || "No se pudo obtener la propiedad.",
        buttonText: "Ok"
      })
    } finally {
      setIsFetching(false)
    }
  }, [id])

  const save = useCallback(async () => {
    try {
      app.setIsLoading(true)
      const result = await propertyService.savePropertyChanges(property)
      app.showAlert({
        type: 'success',
        title: "Completado",
        body: "Los cambios se guardaron correctamente.",
        buttonText: "Ok"
      })
    } catch(error) {
      console.error(error)
      app.showAlert({
        type: 'error',
        title: "Error",
        body: error.message || "No se pudo guardar la propiedad.",
        buttonText: "Ok"
      })
    } finally {
      app.setIsLoading(false)
    }
  }, [property])

  useEffect(() => {
    fetchProperty()
  } , [])

  return { property, setProperty, isFetching, save }
}

export default useProperty