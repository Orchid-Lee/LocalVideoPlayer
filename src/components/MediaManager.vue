<template>
  <div class="media-manager">
    <input
      type="file"
      multiple
      @change="handleFileChange"
      accept="image/*,video/*"
      class="file-input"
    />
    <div class="media-grid">
      <MediaItem v-for="(file, index) in mediaFiles" :key="index" :file="file" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MediaItem from './MediaItem.vue'

export default defineComponent({
  components: {
    MediaItem,
  },
  setup() {
    const mediaFiles = ref<File[]>([])

    const handleFileChange = (e: Event) => {
      const input = e.target as HTMLInputElement
      if (input.files) {
        mediaFiles.value = Array.from(input.files)
      }
    }

    return {
      mediaFiles,
      handleFileChange,
    }
  },
})
</script>

<style scoped>
.media-manager {
  padding: 16px;
}
.file-input {
  margin-bottom: 16px;
}
.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 8px;
}
</style>
