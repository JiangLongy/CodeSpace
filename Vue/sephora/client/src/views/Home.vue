<template>
    <!-- 头部 -->
    <div class="text-center w-full mt-3 pb-[50px]">
        <div class="fixed top-0 w-full bg-white z-50">
            <van-row gutter="20">
            <van-col span="8" class="mt-2 text-ms">门店 <van-icon name="arrow-down" sticky /></van-col>
            <van-col span="8" class="tracking-[.20em] text-xl">SEPHORA</van-col>
            <van-col span="8" class="text-2xl tracking-[.25em]" sticky>
                <van-icon name="chat-o" />
                <van-icon name="bulb-o" />
            </van-col>
        </van-row>
        <!-- 搜索框 -->
        <SearchPop @click="toSearch"/>
        </div>
        <div class="mt-20">
            <Homelabel />
        </div>
        <!-- 轮播图 -->
      
    </div>
    

</template>

<script setup>
import SearchPop from '../components/SearchPop.vue';
import Homelabel from '../components/Homelabel.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const toSearch = () => {
    router.push('/search');
};
</script>

<style lang="less" scoped></style>