import { defineStore } from 'pinia'

interface User {
  email: string
  password: string
}

export const useAuth = defineStore('auth', {
  state: () => ({
    email: '',
    password: '',
    password2: '',
  }),

  actions: {
    registerUser() {},
  },
})
