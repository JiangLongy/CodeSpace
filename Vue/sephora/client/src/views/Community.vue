<template>
  <div class="flex">
    <CommnunityHeader />
  </div>
  <!-- 中部 -->
  <div>
    <!-- 滚动图片 -->
    <div class="flex overflow-x-auto mt-[80px]">
      <div class="w-[80%] h-[100px] mx-2 flex-shrink-0">
        <img src="https://www.dgtianjiao.com/upload/image/20200820/2020082016530740740.jpg" alt=""
          class="w-full h-full rounded-md">
      </div>
      <div class="w-[80%] h-[100px] mx-2 flex-shrink-0">
        <img
          src="https://ts1.cn.mm.bing.net/th/id/R-C.f6b8e3fd12c98d76441b2924dd0fc814?rik=1H4TplibOp4BYQ&riu=http%3a%2f%2fshrsen.com%2fUploads%2f2018-07-26%2f5b5935f529993.jpg&ehk=WCMDajpulBFNNDm%2f4SEi2CpnCUnpmLTQ%2b2CiRx6Iz0U%3d&risl=&pid=ImgRaw&r=0"
          alt="" class="w-full h-full rounded-md">
      </div>
      <div class="w-[80%] h-[100px] mx-2 flex-shrink-0">
        <img
          src="https://ts1.cn.mm.bing.net/th/id/R-C.2ec0f9c66243c54ca2dfa951ed28a9df?rik=gPQtHOQYeHTILA&riu=http%3a%2f%2fshrsen.com%2fUploads%2f2018-07-26%2f5b59361a2a48b.jpg&ehk=IsfXi2i9Ks45wW%2bye6JMGpV22B0Ka9mwyzk3CfR48rc%3d&risl=&pid=ImgRaw&r=0"
          alt="" class="w-full h-full rounded-md">
      </div>
    </div>

    <!-- 标签 -->
    <div class="mt-4 flex text-xs justify-center text-center">
      <span class="flex-1 px-2 py-1  rounded-md cursor-pointer"
        :class="{ ' bg-black': item === '全部', 'text-white': item === '全部' }" @click="select('全部')">全部</span>
      <span class="flex-1 px-2 py-1  rounded-md cursor-pointer"
        :class="{ ' bg-black': item === '变美思路', 'text-white': item === '变美思路' }" @click="select('变美思路')">变美思路</span>
      <span class="flex-1 px-2 py-1  rounded-md cursor-pointer"
        :class="{ ' bg-black': item === '达人种草', 'text-white': item === '达人种草' }" @click="select('达人种草')">达人种草</span>
      <span class="flex-1 px-2 py-1  rounded-md cursor-pointer"
        :class="{ ' bg-black': item === '小众寻宝', 'text-white': item === '小众寻宝' }" @click="select('小众寻宝')">小众寻宝</span>
      <span class="flex-1 px-2 py-1  rounded-md cursor-pointer"
        :class="{ ' bg-black': item === '精选视频', 'text-white': item === '精选视频' }" @click="select('精选视频')">精选视频</span>
    </div>

    <!-- 循环文章 -->
    <div class="flex w-full h-full">
      <div v-for="item in store.data"
        class="mt-4 w-[50%] h-[250px] pr-3 ml-2 border border-gray-300 rounded-md overflow-hidden shadow-md flex flex-col"
        v-if="store.data.length" @click="getNoteDetail(item.id)">
        <div class="w-full h-[180px]">
          <img :src="item.head_image" alt="" class="w-full h-full rounded-t-md">
        </div>
        <div class="van-multi-ellipsis--l2 mt-2 flex-grow">{{ item.title }}</div>
        <div class="flex items-center justify-between w-full mt-2 mb-1">
          <div>{{ item.username }}</div>
          <van-icon name="good-job-o" />
        </div>
      </div>
      <!-- 如果还没有文章 -->
      <div v-else class=" w-full text-center">
        <van-empty description="这里还没有文章哦~~" />
      </div>
    </div>
    <!-- 添加文章 -->
    <van-floating-bubble v-model:offset="offset" axis="xy" icon="plus" magnetic="x" @click="showBottoms" />
    <van-popup v-model:show="showBottom" position="bottom" :style="{ height: '100%', width:'100%'}" >
        
    </van-popup>


  </div>
</template>

<script setup>
import { ref } from 'vue';
import CommnunityHeader from '../components/CommnunityHeader.vue';
import { useCommunityStore } from '../store/community';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const offset = ref({ x: 303, y: 549 });
const showBottom = ref(false)
const router = useRouter();
const store = useCommunityStore();
const item = ref('全部')
const select = async (val) => {
  item.value = val
  await store.getNote(item.value)
}
const showBottoms = () => {
  showBottom.value = true
}
const getNoteDetail = (id) => {
  router.push({ path: '/notedetail', query: { id: id } })
}
const goToAddNote = () => {
  router.push({ path: '/noteadd' })
}
onMounted(async () => {
  await store.getNote(item.value)
})
</script>
<style scoped></style>