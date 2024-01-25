<template>
  <div>
    <!-- 头部 -->
    <div class="flex justify-between fixed bg-white z-999 w-full pb-2">
      <div class="flex mt-3 ml-3">
        <van-icon name="arrow-left" class="mr-2" size="25" @click="goBack" />
      </div>
      <div class="flex mt-3 mr-3">
        <van-icon name="share-o" class="mr-3" size="25" />
        <van-icon name="ellipsis" size="25" />
      </div>
    </div>
    <!-- 图片 -->
    <div class="w-full h-80 pt-[47px] ">
      <img :src="$route.query.img" alt="" class="w-full h-full rounded-sm">
    </div>
    <!-- 商品详情 -->
    <div class="p-4 ">
      <div class="text-2xl font-bold">￥{{ $route.query.price }}</div>
      <div class="text-sm">
        原价
        <del class="text-gray-500">￥{{ calculateOriginalPrice($route.query.price, $route.query.discount) }}</del>
        优惠折扣 {{ $route.query.discount * 100 }}%
      </div>
      <div class="text-lg font-semibold mt-2">{{ $route.query.name }}</div>
      <div class="flex items-center justify-between mt-4 space-x-4 text-xs">
        <span>100%官方正品</span>
        <span>顺丰EMS速达</span>
        <span>丰富礼赠</span>
        <span>无忧退款</span>
      </div>
    </div>
    <!-- 底部 -->
    <van-action-bar class="mb-2 fixed w-full bg-white z-999">
      <van-action-bar-icon icon="bag-o" text="购物车" to="/bag"/>
      <van-action-bar-icon icon="chat-o" text="美容顾问" />
      <van-action-bar-button color="#000000" type="warning" text="加入购物车" @click="show" />
      <van-action-bar-button color="#d30707" type="danger" text="立即购买" />
    </van-action-bar>
  </div>
  <van-popup v-model:show="showBottom" position="bottom" :style="{ height: '40%' }">
    <!-- 头部 -->
    <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
      <div class="mr-4">
        <img :src="$route.query.img" alt="" class="w-24 h-24 object-cover rounded-md">
      </div>
      <div>
        <div class="text-xl font-bold text-gray-800">￥{{ $route.query.price }}</div>
        <div class="text-sm text-gray-500">
          原价
          <del>￥{{ calculateOriginalPrice($route.query.price, $route.query.discount) }}</del>
          优惠折扣 {{ $route.query.discount * 100 }}%
        </div>
              <!-- 购买数量 -->
      <div class="flex items-center justify-between w-full mt-2">
        <div class=" text-sm font-bold">购买数量</div>
        
        <van-stepper v-model="value" button-size="16px"/>
      </div>
      </div>

     
    </div>
    <!-- 底部 -->
    <van-action-bar class="mb-2 fixed w-full bg-white z-999">
      <van-action-bar-icon icon="bag-o" text="购物车" to="/bag" />
      <van-action-bar-icon icon="chat-o" text="美容顾问" />
      <van-action-bar-button color="#000000" type="warning" text="加入购物车" @click="addTobag" />
      <van-action-bar-button color="#d30707" type="danger" text="立即购买" />
    </van-action-bar>
  </van-popup>
</template>
  
<script setup>
import { ref } from "vue";
import {useBagStore} from '../store/bag'
import { showToast, showSuccessToast } from "vant";
const bagStore = useBagStore();
const showBottom = ref(false);
const value = ref(1);
const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
const user_id = userInfo.id;
const queryString = window.location.search;
const queryParams = new URLSearchParams(queryString);
const goods_id = parseInt(queryParams.get('id'),10);
const stock = parseInt(queryParams.get('stock'), 10);
const goodsName = queryParams.get('name');
const price = parseInt(queryParams.get('price'),10)
const calculateOriginalPrice = (price, discount) => {
  const originalPrice = parseFloat(price) / (1 - parseFloat(discount));
  return originalPrice.toFixed(2);
};
const addTobag =() => {
  if (value > stock) {
    showToast('库存不足！');
    return;
  }
  // console.log(userId,id,value.value);
  bagStore.purchaseGoods(user_id, goods_id, goodsName,value.value,price);
  showSuccessToast('成功加入购物车');
};


const show = () => {
  showBottom.value = true;
};

const goBack = () => {
  window.history.back();
};
</script>

<style scoped></style>
          <!-- <h1>商品详情</h1>
      <p>商品ID: {{ $route.query.id }}</p>
      <p>商品名称: {{ $route.query.name }}</p>
      <p>商品价格: ￥{{ $route.query.price }}</p>
      <p>商品图片: {{ $route.query.img }}</p>
      <p>商品库存: {{ $route.query.stock }}</p>
      <p>商品描述: {{ $route.query.desc }}</p>
      <p>商品分类: {{ $route.query.category }}</p>
      <p>商品品牌: {{ $route.query.brand }}</p>
      <p>商品折扣: {{ $route.query.discount }}</p> -->
        <!-- 其他商品信息的展示 -->