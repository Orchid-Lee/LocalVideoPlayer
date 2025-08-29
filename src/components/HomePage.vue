<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import VideoCard from './VideoCard.vue'
import ImageCard from './ImageCard.vue'

const folders = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await fetch('http://127.0.0.1:8888/api/files')

    // 检查响应是否成功
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // 将响应体解析为 JSON
    const { data } = await response.json()

    // 因为后端返回的是一个数组，且 files 在数组的第一个对象里

    // 将获取到的文件列表赋值给 folders
    folders.value = data

    console.log(`文件列表:`, folders.value)
  } catch (error) {
    console.error('获取文件列表失败:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="card-grid">
    <div v-for="(folder, index) in folders" :key="folder.folder" class="card">
      <div v-if="folder.type === 'video'" class="card-content">
        <RouterLink
          :to="{
            name: 'VideoPlayer',
            params: {
              url: folder.path,
              img_url: folder.path,
            },
          }"
        >
          <VideoCard
            :key="index"
            :videoSrc="folder.path"
            :imageSrc="folder.poster_path"
            :title="folder.poster_path"
            :description="folder.name"
          ></VideoCard>
        </RouterLink>
      </div>
      <div v-else>
        <ImageCard
          :key="index"
          :image-src="folder.path"
          :video-src="folder.path"
          :title="folder.name"
          :description="folder.name"
        >
        </ImageCard>
      </div>
    </div>
  </div>
</template>

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
