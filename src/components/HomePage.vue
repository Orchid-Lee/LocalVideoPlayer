<script lang="ts" setup>
import { ref } from 'vue'
import VideoCard from './VideoCard.vue'
import { RouterLink } from 'vue-router'
const cardList = ref([
  {
    image:
      '	https://i.ytimg.com/vi/xXr4Z7HAZCE/hqdefault.jpg?s…iBLKC8wDw==&rs=AOn4CLDJ_caIq5gf88O7FC7g9ho2bRcsmg',
    title:
      'Playlist】夜裡不想說出口的情緒，就讓這些歌代替｜Korean R&B / Chill / Work BGM｜퇴근 후 감성 플레이리스트',
    desc: '【Playlist】夜裡不想說出口的情緒，就讓這些歌代替｜Korean R&B / Chill / Work BGM｜퇴근 후 감성 플레이리스트',
    type: 'video',
    id: '1',
    url: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo.mp4',
  },
  {
    image:
      'https://i.ytimg.com/vi/yDyNUUXoC9s/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLBg2ThndFmAXjDUQuRwJFueDyKYeg',
    title: '风景卡片1',
    desc: '这是一片宁静的湖泊，周围环绕着青山，适合周末露营。',
    type: 'image',
    id: '2',
    url: 'https://picsum.photos/id/10/400/225',
  },
  {
    image:
      'https://i.ytimg.com/vi/HonhCu4Vgmg/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLDXiuBNUClTUE_vearKtOv_o2O29A',
    title: '风景卡片2',
    desc: '这是一片宁静的湖泊，周围环绕着青山，适合周末露营。',
    type: 'image',
    id: '3',
    url: 'https://picsum.photos/id/10/400/225',
  },
  {
    image:
      '	https://i.ytimg.com/vi/xXr4Z7HAZCE/hqdefault.jpg?s…iBLKC8wDw==&rs=AOn4CLDJ_caIq5gf88O7FC7g9ho2bRcsmg',
    title:
      'Playlist】夜裡不想說出口的情緒，就讓這些歌代替｜Korean R&B / Chill / Work BGM｜퇴근 후 감성 플레이리스트',
    desc: '【Playlist】夜裡不想說出口的情緒，就讓這些歌代替｜Korean R&B / Chill / Work BGM｜퇴근 후 감성 플레이리스트',
    type: 'video',
    id: '1',
    url: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo.mp4',
  },
  {
    image:
      'https://i.ytimg.com/vi/yDyNUUXoC9s/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLBg2ThndFmAXjDUQuRwJFueDyKYeg',
    title: '风景卡片1',
    desc: '这是一片宁静的湖泊，周围环绕着青山，适合周末露营。',
    type: 'image',
    id: '2',
    url: 'https://picsum.photos/id/10/400/225',
  },
  {
    image:
      'https://i.ytimg.com/vi/HonhCu4Vgmg/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLDXiuBNUClTUE_vearKtOv_o2O29A',
    title: '风景卡片2',
    desc: '这是一片宁静的湖泊，周围环绕着青山，适合周末露营。',
    type: 'image',
    id: '3',
    url: 'https://picsum.photos/id/10/400/225',
  },
  {
    image:
      '	https://i.ytimg.com/vi/xXr4Z7HAZCE/hqdefault.jpg?s…iBLKC8wDw==&rs=AOn4CLDJ_caIq5gf88O7FC7g9ho2bRcsmg',
    title:
      'Playlist】夜裡不想說出口的情緒，就讓這些歌代替｜Korean R&B / Chill / Work BGM｜퇴근 후 감성 플레이리스트',
    desc: '【Playlist】夜裡不想說出口的情緒，就讓這些歌代替｜Korean R&B / Chill / Work BGM｜퇴근 후 감성 플레이리스트',
    type: 'video',
    id: '1',
    url: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo.mp4',
  },
  {
    image:
      'https://i.ytimg.com/vi/yDyNUUXoC9s/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLBg2ThndFmAXjDUQuRwJFueDyKYeg',
    title: '风景卡片1',
    desc: '这是一片宁静的湖泊，周围环绕着青山，适合周末露营。',
    type: 'image',
    id: '2',
    url: 'https://picsum.photos/id/10/400/225',
  },
  {
    image:
      'https://i.ytimg.com/vi/HonhCu4Vgmg/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLDXiuBNUClTUE_vearKtOv_o2O29A',
    title: '风景卡片2',
    desc: '这是一片宁静的湖泊，周围环绕着青山，适合周末露营。',
    type: 'image',
    id: '3',
    url: 'https://picsum.photos/id/10/400/225',
  },
  {
    image:
      '	https://i.ytimg.com/vi/xXr4Z7HAZCE/hqdefault.jpg?s…iBLKC8wDw==&rs=AOn4CLDJ_caIq5gf88O7FC7g9ho2bRcsmg',
    title:
      'Playlist】夜裡不想說出口的情緒，就讓這些歌代替｜Korean R&B / Chill / Work BGM｜퇴근 후 감성 플레이리스트',
    desc: '【Playlist】夜裡不想說出口的情緒，就讓這些歌代替｜Korean R&B / Chill / Work BGM｜퇴근 후 감성 플레이리스트',
    type: 'video',
    id: '1',
    url: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo.mp4',
  },
  {
    image:
      'https://i.ytimg.com/vi/yDyNUUXoC9s/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLBg2ThndFmAXjDUQuRwJFueDyKYeg',
    title: '风景卡片1',
    desc: '这是一片宁静的湖泊，周围环绕着青山，适合周末露营。',
    type: 'image',
    id: '2',
    url: 'https://picsum.photos/id/10/400/225',
  },
  {
    image:
      'https://i.ytimg.com/vi/HonhCu4Vgmg/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLDXiuBNUClTUE_vearKtOv_o2O29A',
    title: '风景卡片2',
    desc: '这是一片宁静的湖泊，周围环绕着青山，适合周末露营。',
    type: 'image',
    id: '3',
    url: 'https://picsum.photos/id/10/400/225',
  },
])
</script>

<template>
  <div class="card-grid">
    <div v-for="(item, index) in cardList" :key="item.id" class="card">
      <div class="card-content">
        <RouterLink :to="{ name: 'VideoPlayer', params: { url: item.url, img_url: item.image } }">
          <VideoCard
            :key="index"
            :image-src="item.image"
            :title="item.title"
            :description="item.desc"
          ></VideoCard>
        </RouterLink>
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
