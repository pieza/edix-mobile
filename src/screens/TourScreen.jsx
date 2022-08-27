import PropertiesContainer from '../components/property/PropertiesContainer'
import Screen from '../components/layouts/Screen'

import useTourProperties from '../hooks/property/useTourProperties'


const TourScreen = () => {
  const { properties, isFetching, fetchProperties } = useTourProperties()

  return (
    <Screen>
      <PropertiesContainer properties={properties} isLoading={isFetching} onRefresh={fetchProperties}/>
    </Screen>
  )
}

export default TourScreen