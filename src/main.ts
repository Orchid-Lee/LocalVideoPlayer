import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) //启用持久化插件

createApp(App)
  .use(router) // 关键步骤：使用路由实例
  .use(pinia)
  .mount('#app')
