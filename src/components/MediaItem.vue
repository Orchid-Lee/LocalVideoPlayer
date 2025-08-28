<template>
  <div class="media-item" @click="handleClick">
    <video v-if="isVideo" class="media-preview" :src="url" controls preload="metadata"></video>
    <img v-else class="media-preview" :src="url" alt="media" />
    <div class="duration" v-if="isVideo">{{ formatDuration(duration) }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  props: {
    file: {
      type: File,
      required: true,
    },
  },
  setup(props) {
    const url = ref('')
    const isVideo = ref(false)
    const duration = ref(0)

    onMounted(() => {
      const fileReader = new FileReader()
      fileReader.onload = (e) => {
        url.value = e.target?.result as string
        if (props.file.type.startsWith('video/')) {
          isVideo.value = true
          const video = document.createElement('video')
          video.src = url.value
          video.addEventListener('loadedmetadata', () => {
            duration.value = video.duration
          })
        }
      }
      fileReader.readAsDataURL(props.file)
    })

    const handleClick = () => {
      // 可扩展点击逻辑，比如全屏播放等，这里简单打印
      console.log('点击了媒体项', props.file.name)
    }

    const formatDuration = (time: number) => {
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    return {
      url,
      isVideo,
      duration,
      handleClick,
      formatDuration,
    }
  },
})
</script>

<style scoped>
.media-item {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 8px;
  cursor: pointer;
}
.media-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.duration {
  position: absolute;
  bottom: 4px;
  right: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 2px 4px;
  font-size: 12px;
  border-radius: 4px;
}
</style>
