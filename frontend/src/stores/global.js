import axios from 'axios'
import { defineStore } from 'pinia'
export const useGlobalStore = defineStore('global', {
  persist: true,
  state: () => ({
    user_login: {
      username: '',
      password: ''
    },
    user_register: {
      username: '',
      password: '',
      password_confirm: ''
    },
    user: {
      role: 'default_role'
    }
  }),
  getters: {

  },
  actions: {
    async authorize() {
      try {
        const response = await axios.post('/api/auth/authorize')
        return true
      } catch (error) {
        return false
      }
    },
    async login() {
      try {
        const response = await axios.post('/api/auth/login', this.user_login)
        this.user = response.data.user
        this.user_login = {}
        location.href = '/'
      } catch (error) {
        console.log(`Error in global.js > login() ${error}`)
        if (error.response.data.message != '') {
          alert(error.response.data.message)
        } else {
          alert('Error on login')
        }
      }
    },
    async logout() {
      try {
        const response = await axios.post('/api/auth/logout')
        location.href = '/login'
      } catch (error) {
        console.log('Error in global.js > logout', error)
      }
    },
    async register() {
      try {
        if (this.register.password != this.user_register.password_confirm) {
          alert('Password and confirmation do not match')
          return
        }
        const response = await this.axios.post('/api/auth/register', this.user_register)
        this.user_register = {}
        location.href = '/'
      } catch (error) {
        console.log(`Error in global.js > register() ${error}`)
        if (error.response.data.message != '') {
          alert(error.response.data.message)
        } else {
          alert('Error on register')
        }
      }      
    }
  }
})