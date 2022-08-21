import { useEffect, useState } from 'react'
import SweetAlert from 'react-native-sweet-alert'

import edictService from '../../services/edict.service'

const useTourEdicts = () => {
  const [edicts, setEdicts] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const fetchEdicts = () => {
    setIsFetching(true)
    edictService.find()
      .then(result => {
        setEdicts(result.data)
      })
      .catch(err => {
        console.error(err)
        SweetAlert.showAlertWithOptions({
          title: '',
          subTitle: '',
          confirmButtonTitle: 'OK',
          confirmButtonColor: '#000',
          otherButtonTitle: 'Cancel',
          otherButtonColor: '#dedede',
          style: 'success',
          cancellable: true
        },
        callback => console.log('callback'))
        setEdicts([])
      })
      .finally(() => {
        setIsFetching(false)
      })
  }

  useEffect(() => {
    fetchEdicts()
  }, [])

  console.log(edicts)
  return { edicts, isFetching, fetchEdicts }
}

export default useTourEdicts