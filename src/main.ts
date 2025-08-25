import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)

// 关键步骤：使用路由实例
app.use(router)

app.mount('#app')
