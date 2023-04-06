<script>
import { mapStores } from 'pinia'
import { useGlobalStore } from '../stores/global'  
export default {
  name: 'Home',
  computed: {
    ...mapStores(useGlobalStore)
  }
}
</script>
<template>
<div>
  <span>User is {{ globalStore.user }}</span>
  <button @click="this.globalStore.logout()">Logout</button>
</div>
</template>
<style scoped>
</style>