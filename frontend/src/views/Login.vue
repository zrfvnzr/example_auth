<script>
import { mapStores } from 'pinia'
import { useGlobalStore } from '../stores/global'  
export default {
  name: 'Login',
  computed: {
    ...mapStores(useGlobalStore)
  },
  async mounted() {
    const isAuthorized = await this.globalStore.authorize()
    if (isAuthorized) {
      location.href = '/'
    }
  }
}
</script>
<template>
<div class="align-items-start d-flex flex-column">
  <h1>Login</h1>
  <label for="username">Username</label>
  <input v-model="globalStore.user_login.username" type="text" name="username">
  <label for="password">Password</label>
  <input v-model="globalStore.user_login.password" type="password" name="password">
  <button @click="globalStore.login()">Login</button>
  <span>this.globalStore.user is {{ this.globalStore.user }}</span>
</div>
</template>
<style scoped>
</style>