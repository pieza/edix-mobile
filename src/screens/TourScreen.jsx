import EdictsContainer from '../components/edict/EdictsContainer'
import Screen from '../components/layouts/Screen'

import useTourEdicts from '../hooks/edict/useTourEdicts'


const TourScreen = () => {
  const { edicts, isFetching, fetchEdicts } = useTourEdicts()

  return (
    <Screen>
      <EdictsContainer edicts={edicts} isLoading={isFetching} onRefresh={fetchEdicts}/>
    </Screen>
  )
}

export default TourScreen