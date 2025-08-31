<template>
  <div class="media-grid">
    <div class="media-item" v-for="value in fileData" :key="value.path">
      <div v-if="value.type === 'video'">
        <router-link
          :to="{
            name: 'VideoPlayer',
            params: {
              videoUrl: value.path,
              posterUrl: defaultImage,
            },
          }"
        >
          <video class="media-content" :src="getStreamUrl(value.path)"></video>
        </router-link>
      </div>

      <img v-else class="media-content" :src="getStreamUrl(value.path)" alt="image" />
      <div class="duration" v-if="isVideo">{{ formatDuration(duration) }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { type FileData } from '@/types'
import defaultImage from '@/assets/images/video.poster.jpg'
import VideoPlayer from './VideoPlayer.vue'

const isVideo = ref(false)
const duration = ref(0)

const fileData = ref<FileData[] | null>(null)

const route = useRoute()
const router = useRouter()

/* 获取文件流信息 **/
const getStreamUrl = (filePath) => {
  const encodedPath = encodeURIComponent(filePath)
  return `http://127.0.0.1:8888/api/stream?path=${encodedPath}`
}

onMounted(() => {
  const query = route.query

  if (!query.fileData) {
    throw new Error('缺少必要参数')
  }

  // 反序列化文件数组
  const encodeFiles = query.fileData as string
  const decodeFiles = decodeURIComponent(encodeFiles)

  fileData.value = JSON.parse(decodeFiles) as FileData[]
})

const formatDuration = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}
</script>

<style scoped>
.media-grid {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  gap: 16px; /* 元素间距 */
  padding: 16px;
  justify-content: left; /* 水平居中对齐 */
}

.media-item {
  position: relative;
  /* width: 200px; */
  height: 200px;
  margin: 0;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 核心：视频和图片共享样式 */
.media-content {
  height: 100%; /* 强制继承容器高度 */
  width: auto; /* 宽度按比例自适应 */
  min-width: 120px; /* 最小宽度，避免过窄 */
  max-width: 300px; /* 最大宽度，避免过宽 */
  object-fit: contain; /* 完整显示内容（不裁剪），可选 cover 填充 */
  background-color: #000; /* 视频背景 */
}

.duration {
  position: absolute;
  bottom: 4px;
  right: 4px;
  background-color: rgba(0, 0, 0, 0.7); /* 稍加深背景，增强文字可读性 */
  color: white;
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 4px;
  z-index: 10; /* 确保在视频/图片上方显示 */
  pointer-events: none; /* 点击时穿透标签，不影响路由跳转 */
}
</style>
