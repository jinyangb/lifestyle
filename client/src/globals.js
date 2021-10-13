// for heroku API
import axios from 'axios'

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_API_URL
    : 'http://localhost:3001'
//

axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.VUE_APP_API_URL
      : 'http://localhost:3001'
})