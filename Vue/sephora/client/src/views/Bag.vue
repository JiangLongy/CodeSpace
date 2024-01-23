<template>
    <div>
        <!-- 头部 -->
        <div class="flex justify-between items-center h-10 fixed top-0 left-0 right-0 z-10 bg-white shadow-sm" >
            <div class="font-bold text-lg ml-2 mt-2">购物车</div>
            <div class="flex text-xs mt-4 mr-2 text-slate-500">
                <span class="mr-2">分享心愿</span>
                <span class="mr-2">编辑</span>
                <span>客服</span>
            </div>
        </div>
        <!-- 购物车有东西 -->
        <div class="pt-[67px] ml-2 mr-2" v-if="false">
            <div class="flex justify-between w-full items-center h-10 font-bold text-xs">
                <div>买任意商品,享超值兑换</div>
                <van-button round type="success" color="black" size="mini" to="/home">去换购</van-button>
            </div>
            <van-swipe-cell>
                <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card"
                    thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                <template #right class="">
                    <van-button square text="删除" type="danger" class="" />
                </template>
            </van-swipe-cell>
        </div>
        <!-- 购物车没东西 -->
        <div class="pt-[67px] h-[248px] shadow-sm" v-else>
            <van-empty image="https://bpic.51yuansu.com/pic3/cover/03/38/85/5b931b0ddc322_610.jpg" image-size="80"
                description="购物车空空的哦，去看看心仪的商品吧~">
                <van-button round color="black" type="primary" to="/home" class="rounded-xl z--1">去购物</van-button>
            </van-empty>
        </div>
        <!-- 展示所有商品 -->
        <div class="w-full text-center mt-2">
            <van-icon name="like-o" />
            热卖</div>
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

onMounted(() => {
    searchStore.searchAll();
});
</script>

<style lang="less" scoped></style>