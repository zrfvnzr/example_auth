<script>
import { mapStores } from 'pinia'
import { useGlobalStore } from '../stores/global'  
export default {
  name: 'Login',
  computed: {
    ...mapStores(useGlobalStore)
  },
  async mounted() {
    this.globalStore.user_login = {}
    const isAuthorized = await this.globalStore.authorize()
    if (isAuthorized) {
      location.href = '/'
    }
  }
}
</script>
<template>
<div class="align-items-center d-flex flex-column justify-content-center">
  <div id="loginCard" class="align-items-center d-flex flex-column justify-content-center shadow-lg" style="background-color: white; border-radius: 10px; height: 400px; width: 300px;">
    <h1 class="mb-5" style="font-size: 30px; user-select: none;">Login</h1>
    <input v-model="globalStore.user_login.username" autofocus type="text" name="username" placeholder="Username" class="mb-3 p-2" style="border: 1px solid lightgray; border-radius: 5px;">
    <input v-model="globalStore.user_login.password" type="password" name="password" placeholder="Password" class="mb-3 p-2" style="border: 1px solid lightgray; border-radius: 5px;">
    <button @click="globalStore.login()" class="mb-4 myButton1">Login</button>
    <span>Don't have an account? <a href="/register" style="color: blue;">Register</a></span>
  </div>
</div>
</template>
<style scoped>
</style>