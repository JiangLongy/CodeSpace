<template>
    <!-- 头部 -->
    <div class="fixed top-0 left-0 w-full shadow flex bg-white p-2">
        <div class="mt-5 ml-2 h-full text-lg font-semibold">美印社区</div>
        <van-search v-model="store.value" placeholder="请输入搜索关键词" class="ml-5" />
    </div>
</template>

<script setup>
import { reactive,onMounted  } from 'vue';
import {useCommunityStore}from '../store/community'
const store = useCommunityStore();

</script>

<style scoped>
    
</style>