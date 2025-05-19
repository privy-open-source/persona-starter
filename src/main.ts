import './assets/css/tailwind.css'
import './assets/css/style.css'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import NuxtLink from './NuxtLink.vue'
import { initStore, installRouter } from '@privyid/persona/core'

const router = createRouter({
  history: createWebHashHistory(),
  routes : setupLayouts(routes),
})

installRouter({
  async toURL (url) {
    return await router.push(url)
  },
  getURL () {
    return router.currentRoute.value.fullPath
  },
})

initStore()

createApp(App)
  .use(router)
  .component('NuxtLink', NuxtLink)
  .mount('#app')
