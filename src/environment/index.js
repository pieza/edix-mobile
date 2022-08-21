import dev from './dev'
import prod from './prod'

export default __DEV__ ? dev : prod
