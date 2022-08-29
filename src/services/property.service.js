import axios from 'axios'
import environment from '../environment'
import authService from './auth.service'

class PropertyService {
  constructor() {
    this.url = `${environment.API_URL}/Property`
  }

  getAuthHeaders() {
    return authService.getAuthHeaders()
  }

  async getProperty(edictId) {
    return await axios.get(`${this.url}/GetProperty`, {
      headers: await this.getAuthHeaders(),
      params: {
        edictId
      }
    })
  }

  async getPropertiesOnTour() {
    return await axios.get(`${this.url}/GetPropertiesOnTour`, {
      headers: await this.getAuthHeaders()
    })
  }

  async savePropertyChanges(property) {
    return await axios.post(`${this.url}/SavePropertyChanges`, property, {
      headers: await this.getAuthHeaders()
    })
  }
}

export default new PropertyService()