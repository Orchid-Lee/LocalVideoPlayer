import mitt, { Emitter } from 'mitt'

// 定义所有可能的事件类型和对应的数据结构
type Events = {
  // 文件夹选中事件，传递文件夹信息
  'folder-selected': {
    folder: Array<{
      ext: string
      name: string
      path: string
      size: string
      type: string
    }>

    timestamp: number
  }
  // 文件播放事件，传递文件ID
  'file-play': string
  // 文件列表更新事件，无数据
  'file-list-updated': void
}

// 创建带类型的事件总线实例
const eventBus: Emitter<Events> = mitt<Events>()

export default eventBus
