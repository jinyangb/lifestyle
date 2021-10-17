import Axios from 'axios'

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'

const Client = Axios.create({ baseURL: BASE_URL })

export default Client
