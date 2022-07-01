import axios, { AxiosRequestConfig } from 'axios'
import { AuthService } from './auth'

export default axios.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    if (config.headers) {
      config.headers['Authorization'] = AuthService.getLocalStorage().jwtToken as string

      return config
    }
  },
  (error) => {
    return Promise.reject(error)
  },
)
