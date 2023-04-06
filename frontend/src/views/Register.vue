<script>
import { mapStores } from 'pinia'
import { useGlobalStore } from '../stores/global'  
export default {
  name: 'Register',
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
  <h1>Register</h1>
  <label for="username">Username</label>
  <input v-model="globalStore.user_register.username" type="text" name="username">
  <label for="password">Password</label>
  <input v-model="globalStore.user_register.password" type="password" name="password">
  <label for="password">Repeat Password</label>
  <input v-model="globalStore.user_register.password_confirm" type="password" name="password">
  <button @click="globalStore.register()">Register</button>
</div>
</template>
<style scoped>
</style>