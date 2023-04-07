<script>
import { mapStores } from 'pinia'
import { useGlobalStore } from '../stores/global'  
export default {
  name: 'Register',
  computed: {
    ...mapStores(useGlobalStore)
  },
  async mounted() {
    this.globalStore.user_register = {}
    const isAuthorized = await this.globalStore.authorize()
    if (isAuthorized) {
      location.href = '/'
    }
  }
}
</script>
<template>
<div class="align-items-center d-flex flex-column justify-content-center">
  <div id="registerCard" class="align-items-center d-flex flex-column justify-content-center shadow-lg" style="background-color: white; border-radius: 10px; height: 400px; width: 300px;">
    <h1 class="mb-5" style="font-size: 30px; user-select: none;">Register</h1>
    <input v-model="globalStore.user_register.username" autofocus type="text" name="username" placeholder="Username" class="mb-3 p-2" style="border: 1px solid lightgray; border-radius: 5px;">
    <input v-model="globalStore.user_register.password" type="password" name="password" placeholder="Password" class="mb-3 p-2" style="border: 1px solid lightgray; border-radius: 5px;">
    <input v-model="globalStore.user_register.password_confirm" type="password" name="password" placeholder="Confirm Password" class="mb-3 p-2" style="border: 1px solid lightgray; border-radius: 5px;">
    <button @click="globalStore.register()" class="mb-4 myButton1">Register</button>
    <span>Already have an account? <a href="/login" style="color: blue;">Login</a></span>
  </div>
</div>
</template>
<style scoped>
</style>