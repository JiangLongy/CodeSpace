<template>
    <div>
      <!-- 头部 -->
      <div class="flex fixed w-full bg-white justify-center items-center shadow-sm h-[55px]">
        <div class="mt-3 ml-2">
          <van-icon name="arrow-left" size="30" @click="goback"/>
        </div>
        <div class="flex-1 mt-3 ml-2" v-if="communityStore.note[0]">
          {{ communityStore.note[0].username }}
        </div>
        <div class="flex items-center mt-3 mr-2">
          <div class="mr-5">
            <button class="bg-white text-red-500 border border-red-500 px-3 py-1 rounded-full">
              关注
            </button>
          </div>
          <div>
            <van-icon name="share-o" size="30" />
          </div>
        </div>
      </div>
      <!-- 文章部分 -->
      <div class="w-full h-80 pt-[55px]">
        <!-- 图片 -->
        <div>
          <img :src="communityStore.note[0]?.head_image" alt="" class="w-full h-full">
        </div>
        <!-- 标题 -->
        <div class="mt-3 font-bold ml-3" v-if="communityStore.note[0]">
          {{ communityStore.note[0].title }}
        </div>
        <!-- 内容 -->
        <div class="mt-3 ml-3" v-if="communityStore.note[0]">
          {{ communityStore.note[0].note_content }}
        </div>
        <!-- 底部 -->
        <div class="fixed bottom-0 w-full bg-white border-t border-gray-300 p-4 flex items-center justify-between">
          <div class="w-1/3">
            <input type="text" placeholder="说点什么..." class="w-full p-2 rounded-full focus:outline-none text-gray-400 bg-gray-100 border-none">
          </div>
          <div class="flex items-center space-x-4 mr-8">
            <div class="flex items-center text-gray-500 hover:text-blue-500 cursor-pointer">
              <van-icon name="good-job-o" size="30" />
            </div>
            <div class="flex items-center text-gray-500 hover:text-yellow-500 cursor-pointer">
              <van-icon name="like-o" size="30" />
            </div>
            <div class="flex items-center text-gray-500 hover:text-green-500 cursor-pointer">
              <van-icon name="comment-o" size="30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useCommunityStore } from '../store/community';
  
  const communityStore = useCommunityStore();
  const route = useRoute();
  
  const goback = () => {
   window.history.back();
  };
  onMounted(async () => {
    await communityStore.getNoteDetail(route.query.id);
    console.log(communityStore.note[0]);
  });
  </script>
  
  <style lang="scss" scoped></style>
  