<template>
    <!-- 搜索到数据就显示 -->
    <div class="grid grid-cols-2 gap-4 p-4" v-if="searchStore.goods.data.length">
      <div v-for="item in searchStore.goods.data" :key="item.id" class="bg-white rounded-md overflow-hidden shadow-md">
        <img :src="item.image_url" alt="" class="w-full h-40 object-cover" loading="lazy">
        <div class="p-4">
          <div class="text-sm font-semibold line-clamp-2">{{ item.name }}</div>
          <div class="text-red-500 font-bold mt-2">￥{{ item.price }}</div>
        </div>
      </div>
    </div>
    <!-- 没有就显示这里没有你想要的东西哦 -->
    <div v-else>
        <van-empty 
        image="https://img.88icon.com/download/jpg/20201103/99ccfe3ebbc2a54599c58db324b3327c_512_512.jpg!bg" 
        description="没有找到你想要的东西哦！" />
    </div>
  </template>
  
  <script setup>
  import { useSearchStore } from '../store/search';
  const searchStore = useSearchStore();

  </script>
  