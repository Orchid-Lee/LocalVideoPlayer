import { defineStore } from 'pinia'
import { type FileData } from '@/types'
import { ref, computed } from 'vue'

// 扩展FileData类型

//
export const useMediaStore = defineStore('media', {
  //计算属性
  getters: {},
  persist: {
    key: 'media-store',
    storage: localStorage,
    paths: ['history', 'favorites'],
  },
  actions: {
    setCurrentFolder(folder: { files: FileData[] }) {
      this.currentFolder = {
        files: folder.files.map((file) => {}),
      }
    },
  },
})
