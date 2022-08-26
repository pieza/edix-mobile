import { useEffect, useState } from 'react'
import { useApp } from '../../context/app-context'

import edictService from '../../services/edict.service'

const useTourEdicts = () => {
  const app = useApp()
  const [edicts, setEdicts] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const fetchEdicts = () => {
    setIsFetching(true)
    edictService.getPropertiesOnTour()
      .then(result => {
        setEdicts(result.data)
      })
      .catch(err => {
        console.error(err)
        app.showAlert({
          type: 'error',
          title: "Error",
          body: err.message || "Ocurrio un error.",
          buttonText: "Ok"
        })
        setEdicts([])
      })
      .finally(() => {
        setIsFetching(false)
      })
  }

  useEffect(() => {
    fetchEdicts()
  }, [])

  return { edicts, isFetching, fetchEdicts }
}

export default useTourEdicts