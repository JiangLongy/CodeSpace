<template>
    <!-- 右侧区域的第一个图片 -->
    <div class="w-full h-[100px]">
        <img :src="current.pic" alt="" class="w-full h-full rounded-md">
    </div>
    <!-- 图片下面的商品列表 -->
    <div class="w-full mt-5" v-for="item in current.subList">
        <div class="font-bold text-sm">{{ item.title }}</div>
        <van-row class="mt-5">
            <van-col span="8" v-for="goods in item.list">
                <div class="w-15 h-20">
                    <img :src="goods.pic" alt="" class="w-full h-full rounded-md">
                </div>
                
                <div class="text-center mt-2 text-slate-500 text-sm">{{goods.name}}</div>
            </van-col>
        </van-row>
    </div>
</template>

<script setup>
import { useBarsStore } from '../store/bars';
import { computed } from 'vue';
const barsStore = useBarsStore();
const current = computed(() => barsStore.barList[barsStore.activeBarId]);
</script>

<style scoped></style>