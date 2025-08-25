import { createWebHistory, createRouter } from 'vue-router'

// 1. 导入路由组件（推荐懒加载）
const HomePage = () => import('../../src/components/HomePage.vue')
const VideoPlayer = () => import('../components/VideoPlayer.vue')

// 2. 定义路由规则
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { title: '首页' }, // 路由元信息
  },
  {
    path: '/video/:url:img_url',
    name: 'VideoPlayer',
    component: VideoPlayer,
    porps: true,
  },
]

// 3. 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
