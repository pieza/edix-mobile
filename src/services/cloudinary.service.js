import axios from 'axios'
import environment from '../environment'

class CloudinaryService {

  constructor() {
    this.url = environment.CLOUDINARY_URL
    this.uploadPreset = environment.CLOUDINARY_UPLOAD_PRESET
    this.apiKey = environment.CLOUDINARY_API_KEY
  }

  async uploadImage(file) {
    return await axios.post(this.url, {
      file,
      upload_preset: this.uploadPreset,
      api_key: this.apiKey
    })
  } 
}

export default new ImageService()