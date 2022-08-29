import axios from 'axios'
import environment from '../environment'

class CloudinaryService {

  constructor() {
    this.url = environment.CLOUDINARY_URL
    this.uploadPreset = environment.CLOUDINARY_UPLOAD_PRESET
    this.apiKey = environment.CLOUDINARY_API_KEY
  }

  async uploadFile(file) {
    return await axios.post(`${this.url}/upload`, {
      file,
      upload_preset: this.uploadPreset,
      api_key: this.apiKey,
      resource_type: 'auto'
    })
  }

  async deleteFile(file) {
    return await axios.post(`${this.url}/destroy`, {
      file,
      upload_preset: this.uploadPreset,
      api_key: this.apiKey,
      resource_type: 'auto'
    })
  } 
}

export default new CloudinaryService()