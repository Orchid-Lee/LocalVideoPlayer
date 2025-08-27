<script lang="ts" setup>
import Player from 'xgplayer'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import 'xgplayer/dist/index.min.css'

const route = useRoute()

const getStreamUrl = (filePath) => {
  const encodedPath = encodeURIComponent(filePath)
  return `http://127.0.0.1:5000/api/stream?path=${encodedPath}`
}

onMounted(() => {
  const videoUrl = route.params.url
  const img_url = route.params.img_url
  console.log('video-url:', getStreamUrl(videoUrl))
  new Player({
    id: 'mse',
    lang: 'zh',
    volume: 0,
    autoplay: true,
    autoplayMuted: true,
    // screenShot: true,
    // defaultPlaybackRate: 2.0,
    // loop: true,
    // startTime: 40,
    url: [
      {
        src: getStreamUrl(videoUrl),
        type: 'video/mp4',
      },
    ],
    poster: img_url,
    // fluid: true, // 填满屏幕 （流式布局）
    playbackRate: [0.5, 0.75, 1, 1.5, 2], //传入倍速可选数组
    // height: '100%',
    width: '100%',
    // width: 1280,
    // height: 600,
    fitVideoSize: 'fixHeight',
    playsinline: true,
    progressDot: [
      {
        id: 0, // 唯一标识，用于删除的时候索引
        time: 10, // 展示的时间点，例子为在播放到10s钟的时候展示
        text: '你是傻子', // hover的时候展示文案，可以为空
        duration: 1, // 展示时间跨度，单位为s
        style: {
          // 指定样式
          backgroundColor: 'yellow',
        },
      },
    ],

    marginControls: false,
    closeFocusVideoFocus: true,
    closeVideoClick: true,
  })

  const result = Player.isHevcSupported()
  console.log(result ? 'support h265!' : "Don't support!")
})
</script>

<template>
  <div id="mse"></div>
</template>

<styele scoped>

</styele>
