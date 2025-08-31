<template>
  <!-- 卡片容器：控制整体大小、阴影、圆角 -->
  <div class="card" @mouseenter="isHover = true" @mouseleave="isHover = false" @click="handleClick">
    <!-- 图片区域：控制比例、溢出裁剪 -->
    <div class="card__image-container">
      <img
        :src="getStreamUrl(imageSrc) || defaultImage"
        class="card__image"
        :class="{ 'card__image--hover': isHover }"
      />
    </div>
    <!-- 文本区域：控制内边距、字体样式 -->
    <div class="card__content">
      <h3 class="card__title">{{ title }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import router from '@/router'
import { type FileData } from '@/types'

// 定义默认图片路径（假设在src/assets目录下）
import defaultImage from '@/assets/images/video.poster.jpg'

// 定义 hover 状态（控制交互效果）
const isHover = ref(false)

// 获取图片文件流信息
const getStreamUrl = (filePath: string): string | null => {
  if (filePath.toLowerCase().endsWith('.mp4')) {
    return null
  }

  const encodedPath = encodeURIComponent(filePath)
  return `http://127.0.0.1:8888/api/stream?path=${encodedPath}`
}

// 定义组件 props（外部传入的动态数据）
const props = defineProps<{
  imageSrc: string
  title: string
  fileData: FileData[]
}>()

const handleClick = () => {
  try {
    // 1. 序列化文件数据（避免URL特殊字符问题）
    const folderStr: string = JSON.stringify(props.fileData)
    const encodedFiles = encodeURIComponent(folderStr)

    router.push({
      name: 'FileItemList',
      query: {
        fileData: encodedFiles,
      },
    })
  } catch (err) {
    console.log('跳转失败:', err)
  }
}
</script>

<style scoped>
/* 卡片整体样式：固定宽高比、阴影、圆角、过渡 */
.card {
  width: 100%; /* 响应式宽度，父容器控制实际大小 */
  max-width: 100%; /* 最大宽度限制，避免过大 */
  border-radius: 12px; /* 圆角优化 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* 柔和阴影 */
  overflow: hidden; /* 裁剪图片圆角 */
  background-color: #fff;
  transition: box-shadow 0.3s ease; /* 阴影过渡 */
  cursor: pointer; /* 鼠标悬浮变指针，提示可点击 */
}

/* 鼠标悬浮时增强阴影，提升交互感 */
.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

/* 图片容器：固定宽高比（16:9 黄金比例），避免图片拉伸 */
.card__image-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 = 9/16 = 56.25% */
}

/* 图片样式：覆盖容器、保持比例、过渡效果 */
.card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持图片比例，裁剪超出部分（避免拉伸） */
  transition: transform 0.3s ease; /* 缩放过渡 */
}

/*  hover 时图片轻微缩放，增强交互 */
.card__image--hover {
  transform: scale(1.03);
}

/* 文本区域：内边距、字体样式 */
.card__content {
  padding: 16px; /* 内边距，避免文本贴边 */
}

/* 标题样式：字体大小、粗细、margin 控制 */
.card__title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937; /* 深灰，比纯黑更柔和 */
  margin: 0 0 8px 0; /* 底部留空，区分标题和描述 */
  /* 确保标题只显示一行 */
  white-space: nowrap;
  /* 隐藏超出容器的文本 */
  overflow: hidden;
  /* 显示省略号 */
  text-overflow: ellipsis;
}

/* 描述样式：字体大小、颜色、多行省略 */
.card__desc {
  font-size: 14px;
  color: #6b7280; /* 浅灰，不抢标题风头 */
  line-height: 1.5; /* 行高优化可读性 */
  margin: 0;
  /* 多行文本省略（最多2行） */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
