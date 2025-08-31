import { createWebHistory, createRouter } from 'vue-router'

// 1. 导入路由组件（推荐懒加载）
const HomePage = () => import('../../src/components/HomePage.vue')
const VideoPlayer = () => import('../components/VideoPlayer.vue')
const FileItemList = () => import('../components/FileItemList.vue')

// 2. 定义路由规则
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { title: '首页' }, // 路由元信息
  },
  {
    path: '/video/:videoUrl:posterUrl',
    name: 'VideoPlayer',
    component: VideoPlayer,
    porps: true,
  },
  {
    path: '/detail',
    name: 'FileItemList',
    component: FileItemList,
    meta: {
      title: '媒体文件详情',
    },
    porps: {},
  },
]

// 3. 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 可选：全局导航守卫，用于设置页面标题
router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
})

export default router
