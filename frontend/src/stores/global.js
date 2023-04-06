import axios from 'axios'
import { defineStore } from 'pinia'
export const useGlobalStore = defineStore('global', {
  persist: true,
  state: () => ({
    // count: 10
  }),
  getters: {

  },
  actions: {
    // async foo() {
    //   return 'bar'
    // }
  }
})