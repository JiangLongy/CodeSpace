<template>
    <div>
        <!-- 头部 -->
        <div class="flex justify-between items-center h-10 fixed top-0 left-0 right-0 z-10 bg-white shadow-sm pt-4">
            <div class="font-bold text-lg ml-2 mt-2">购物车</div>
            <div class="flex text-xs mt-4 mr-2 text-slate-500">
                <span class="mr-2">分享心愿</span>
                <span class="mr-2">编辑</span>
                <span>客服</span>
            </div>
        </div>
        <!-- 购物车有东西 -->
        <div class="pt-[67px] ml-2 mr-2" v-if="bagStore.bagGoods.length !== 0">
            <div class="flex justify-between w-full items-center h-10 font-bold text-xs shadow-sm">
                <div>买任意商品,享超值兑换</div>
                <van-button round type="success" color="black" size="mini" to="/home">去换购</van-button>
            </div>
            <div class="flex w-full items-center h-24 border overflow-x-scroll" v-for="item in bagStore.bagGoods"
                :key="item.id">
                <div><van-checkbox v-model="checked"></van-checkbox></div>
                <div class="w-16 h-16 ml-2">
                    <img src="https://img.zcool.cn/community/01293a564da3be32f87512f612322b.jpg@1280w_1l_2o_100sh.jpg"
                        alt="" class="w-full h-full">
                </div>
                <div class="ml-4 flex-shrink-0">
                    <div>{{ item.goodsname }}</div>
                    <div class="mt-6 flex items-center">
                        <div class="mr-4">￥{{ item.price }}</div>
                        <div><van-stepper v-model="value" theme="round" button-size="22" disable-input /></div>
                    </div>
                </div>
                <div class="ml-2 pr-4" >
                    <van-button color="#000" plain @click="bagStore.deleteGoods(user_id,item.id)">删除</van-button>
                </div>
            </div>
            <!-- 结算 -->

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
            热卖
        </div>
        <div>
            <GoodsShow />
        </div>
    </div>
    <div class="fixed bottom-10 left-0 right-0 bg-white p-4 border-t border-gray-300 flex justify-between items-center">
    <div class="flex items-center">
        <div class="mr-2"><van-checkbox v-model="checked" /></div>
        <div class="text-sm">全选</div>
    </div>
    <div class="flex items-center">
        <div class="mr-4 text-lg">￥5200</div>
        <div><van-button round type="success" color="#ff4777">结算</van-button></div>
    </div>
</div>

</template>
  
  
  
<script setup>
import { onMounted } from 'vue';
import { useBagStore } from '../store/bag'
import { ref } from 'vue';

const bagStore = useBagStore();
const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
const user_id = userInfo.id;

const checked = ref(false)
onMounted(() => {
    bagStore.getBagGoods(user_id);
})
</script>

<style lang="less" scoped></style>