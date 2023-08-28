import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

api.interceptors.response.use(
  (value) => value,
  (error) => {
    return Promise.reject(error)
  },
)

export default api
