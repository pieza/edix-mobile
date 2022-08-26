import axios from 'axios'
import environment from '../environment'
import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthService {
  
  constructor() {
    this.url = `${environment.API_URL}/Security`
  }

  async login(userName, password) {
    return await axios.get(`${this.url}/Login`, { 
      params: {
        userName,
        password
      }
    })
  }

  async getLoggedUser() {
    return await axios.get(`${this.url}/current`, {
      headers: await this.getAuthHeaders()
    })
  }

  async getAuthHeaders() {
    return {
      'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
    }
  }

  async logout() {
    
  }
}

export default new AuthService()