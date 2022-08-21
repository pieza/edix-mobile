import axios from 'axios'
import environment from '../environment'

class EdictService {
  constructor() {
    this.url = environment.API_URL
  }

  async find() {
    return await axios.get(`${this.url}/edicts`)
  }
}

export default new EdictService()