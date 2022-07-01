import { defineStore } from 'pinia'
import axios, { AxiosResponse } from 'axios'
import { User } from 'models/User'
import { AuthService } from '@services/auth'

export const useLogin = defineStore('login', {
  actions: {
    async loginUser(user: User) {
      await axios
        .post('http://localhost:8080/api/v1/users/login', {
          email: user.email.value,
          password: user.password.value,
        })
        .then((response: AxiosResponse<any, any>) => {
          AuthService.setLocalStorage(response)
        })
        .catch((error: any) => {
          throw error.response.data
        })
    },
  },
})
