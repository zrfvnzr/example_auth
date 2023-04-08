<script>
import { mapStores } from 'pinia'
import { useGlobalStore } from '../stores/global'  
export default {
  name: 'Home',
  computed: {
    ...mapStores(useGlobalStore)
  },
  async mounted() {
    const isAuthorized = await this.globalStore.authorize()
    if (!isAuthorized) {
      location.href = '/login'
    }
  }
}
</script>
<template>
<div class="align-items-center d-flex flex-column justify-content-center">
  <h1 class="mb-5" style="font-size: 30px;">Welcome! You are logged in as <b><u>{{ globalStore.user.username }}</u></b> with role <b><u>{{ globalStore.user.role }}</u></b></h1>
  <button @click="this.globalStore.logout()" class="myButton1">Logout</button>
</div>
</template>
<style scoped>
</style>