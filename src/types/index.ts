// 1. 定义类型接口，提供类型安全
export interface FileData {
  ext: string
  name: string
  path: string
  size: string
  type: string
}

export interface Folder {
  file_count: string
  files: FileData[]
  folder: string
  poster_path: string
}
