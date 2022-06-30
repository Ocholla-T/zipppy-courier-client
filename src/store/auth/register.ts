import axios from 'axios'
import { defineStore } from 'pinia'
import { User } from 'models/User'
import { Ref } from 'vue'
import { AuthService } from '@services/auth'

export const useRegister = defineStore('register', {
  actions: {
    async registerUser(user: User) {
      /*
       *------------------------------------
       * ZIPPY-COURIER-API POST METHOD
       * -----------------------------------
       * Expects username and password
       */
      await axios
        .post('http://localhost:8080/api/v1/users/register', {
          email: user.email.value,
          password: user.password.value,
          confirmPassword: (user.confirmPassword as Ref<string>).value,
        })
        .then(async (response) => {
          console.log('user created successfully')
        })
        .catch((error) => {
          throw error.response.data
        })
    },
  },
})
