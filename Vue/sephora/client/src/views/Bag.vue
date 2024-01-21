<template>
    <div>
        <!-- 头部 -->
        <div class="flex justify-between p-4 text-xs h-[35px] shadow bg-black fixed w-full z-999" >
            <div class="flex items-center text-white">
                <div class="mr-2">距活动结束</div>
                <van-count-down :time="time" class="ml-2" style="--van-count-down-text-color: white;" />
            </div>
            <div class="text-white mt-3 mr-7">客服</div>
        </div>
        <!-- 购物车有东西 -->
        <div>

        </div>
        <!-- 购物车没东西 -->
        <div class="pt-[67px] h-[248px] shadow-sm">
            <van-empty image="https://bpic.51yuansu.com/pic3/cover/03/38/85/5b931b0ddc322_610.jpg" image-size="80"
                description="购物车空空的哦，去看看心仪的商品吧~">
                <van-button round color="black" type="primary" to="/home" class="rounded-xl z--1">去购物</van-button>
            </van-empty>
        </div>
        <!-- 展示所有商品 -->
        <van-divider>热卖</van-divider>
        <div>
            <GoodsShow />
        </div>
    </div>
</template>
  
  
  
<script setup>
import { ref } from 'vue';
import { useSearchStore } from '../store/search';
import { onMounted } from 'vue';
import GoodsShow from '../components/GoodsShow.vue';

const searchStore = useSearchStore();
const time = ref(30 * 60 * 60 * 1000);

onMounted(() => {
    searchStore.searchAll();
});
</script>

<style lang="less" scoped></style>