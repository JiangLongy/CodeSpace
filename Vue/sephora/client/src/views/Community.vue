<template>
  <div class="flex">
    <CommnunityHeader />
  </div>
  <!-- 中部 -->
  <div class="mt-[71px] bg-slate-50">
    <van-tabs v-model:active="state.active">
      <van-tab :title="item.title" v-for="item in state.type" :key="item.id">
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div
            v-for="note in store.data"
            :key="note.id"
            class="col-span-1 bg-white rounded-md shadow p-4"
          >
            <div class="h-40 flex items-center justify-center">
              <img :src="note.head_image" alt="" class="w-full h-full rounded-t-md" />
            </div>
            <div class="h-10 overflow-hidden">
              <div class="line-clamp-2">{{ note.title }}</div>
            </div>
            <div class="mt-2 flex items-center justify-between">
              <span class="flex-1">{{ note.username }}</span>
              <span class="text-gray-500"><van-icon name="good-job-o" /></span>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import CommnunityHeader from '../components/CommnunityHeader.vue';
import { reactive, onMounted } from 'vue';
import { useCommunityStore } from '../store/community';

const store = useCommunityStore();
const state = reactive({
  active: 0,
  type: [
    { id: 0, title: '全部' },
    { id: 1, title: '变美思路' },
    { id: 2, title: '达人种草' },
    { id: 3, title: '小众寻宝' },
    { id: 4, title: '精选视频' },
  ],
});
onMounted(() => {
  store.getNote();
});
</script>
