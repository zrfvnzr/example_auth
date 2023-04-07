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
<div class="align-items-ccenter d-flex flex-column justify-content-center">
  <span>User is {{ globalStore.user }}</span>
  <button @click="this.globalStore.logout()">Logout</button>
</div>
</template>
<style scoped>
</style>