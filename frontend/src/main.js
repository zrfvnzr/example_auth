import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// Vue Router
  import {createRouter, createWebHistory} from 'vue-router'

  // import route components
  // import Component from '../components/Component.vue'
  import Home from './views/Home.vue'
  import Login from './views/Login.vue'
  import Register from './views/Register.vue'

  // configure routes
  const routes = [
    // {path: '/', component: Component}
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Register}
  ]

  const router = createRouter({
    history: createWebHistory(), routes
  })
  app.use(router)
// end Vue Router

// Pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
// end Pinia

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
app.use(VueAxios, axios)
// end Axios

app.mount('#app')