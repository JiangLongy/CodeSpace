<template>
    <!-- 头部 -->
    <div class="text-center w-full mt-3">
        <van-row gutter="20">
            <van-col span="8" class="mt-2 text-ms">门店 <van-icon name="arrow-down" sticky /></van-col>
            <van-col span="8" class="tracking-[.20em] text-xl">SEPHORA</van-col>
            <van-col span="8" class="text-2xl tracking-[.25em]" sticky>
                <van-icon name="chat-o" />
                <van-icon name="bulb-o" />
            </van-col>
        </van-row>
        <!-- 搜索框 -->
        <SearchPop />
        <!-- 轮播图 -->
        <Homelabel />
    </div>
    

</template>

<script setup>
import SearchPop from '../components/SearchPop.vue';
import Homelabel from '../components/Homelabel.vue';
</script>

<style lang="less" scoped></style>