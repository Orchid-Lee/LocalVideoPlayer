<template>
  <div class="card-grid">
    <div v-for="(folder, index) in folders" :key="folder.folder" class="card">
      <div class="card-content">
        <PosterCard
          :key="index"
          :imageSrc="folder.poster_path"
          :title="folder.poster_path"
          :fileData="folder.files"
        >
        </PosterCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import PosterCard from './PosterCard.vue'
import { Folder } from '@/types'

// 媒体文件夹信息
const folders = ref<Folder[]>([])
const loading = ref(true)
const error = ref<string | null>(null) // 新增错误状态管理

const featchFolders = async (): Promise<Folder[]> => {
  try {
    const response = await fetch('http://localhost:8888/api/folders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // 可添加超时控制 5s超时
      signal: AbortSignal.timeout(5000),
    })

    if (!response.ok) {
      // 更详细的错误信息
      const errorData = await response.json().catch(() => ({}))
      throw new Error(`获取文件夹失败: ${errorData.message || `HTTP状态码: ${response.status}`}`)
    }

    const { data } = await response.json()

    if (!Array.isArray(data)) {
      throw new Error('接口返回数据格式不正确，期望数组')
    }

    return data as Folder[]
  } catch (err) {
    if (err instanceof Error) {
      if (err.name === 'AbortError') {
        throw new Error('请求超时，请稍后重试')
      }
      throw new Error(err.message)
    }
    throw new Error('获取文件夹信息时发生未知错误')
  }
}

onMounted(async () => {
  try {
    loading.value = true
    // 重置错误状态
    error.value = null
    const data = await featchFolders()
    // 将获取到的文件列表赋值给 folders
    folders.value = data
  } catch (err) {
    error.value = err instanceof Error ? err.message : '获取文件列表失败'
    console.error('获取文件列表失败:', err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.card-grid {
  display: grid;
  /* repeat() 函数让你可以轻松重复列。
     这里表示每列的宽度是自动（auto），并且可以自动填充。
     minmax() 确保每列最小宽度为 250px，最大宽度为 1fr（可用空间）。*/
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 20px; /* 卡片之间的间距 */
  padding: 20px;
  /* 核心改动：设置最大宽度 */
  /* max-width: 800px; 或者你认为合适的宽度 */
  margin: 0 auto; /* 居中显示 */
}

.card {
  /* 定义卡片的样式，比如阴影、圆角等 */
  border-radius: 8px;
  overflow: hidden; /* 隐藏超出卡片容器的内容 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px); /* 鼠标悬停时的效果 */
}

.card-content {
  /* 可以进一步定义卡片内部内容的样式 */
  padding: 15px;
}

.card img,
.card video {
  width: 100%; /* 图片和视频填满卡片宽度 */
  height: 100%; /* 图片高度撑满卡片 */
  object-fit: cover; /* 保持宽高比并覆盖整个容器，可能会裁剪 */
  display: block;
}

.card a {
  display: block;
  text-decoration: none; /* 去除下划线 */
  color: inherit; /* 继承父元素的颜色 */
}
</style>
