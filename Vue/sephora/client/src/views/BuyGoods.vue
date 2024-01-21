<template>
    <div>
        <!-- 头部 -->
      <div class="flex justify-between fixed bg-white z-999 w-full pb-2">
        <div class="flex mt-3 ml-3">
          <van-icon name="arrow-left" class="mr-2" size="25" @click="goBack"/>
        </div>
        <div class="flex mt-3 mr-3">
          <van-icon name="share-o" class="mr-3" size="25"/>
          <van-icon name="ellipsis" size="25"/>
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
      <span >100%官方正品</span>
      <span >顺丰EMS速达</span>
      <span >丰富礼赠</span>
      <span >无忧退款</span>
    </div>
  </div>
        <!-- 底部 -->
        <van-action-bar class="mb-2 fixed w-full bg-white z-999">
            <van-action-bar-icon icon="bag-o" text="购物车" />
            <van-action-bar-icon icon="chat-o" text="美容顾问" />
            <van-action-bar-button color="#000000" type="warning" text="加入购物车" />
            <van-action-bar-button color="#d30707" type="danger" text="立即购买" />
        </van-action-bar>
    </div>
</template>
  
<script setup>
const calculateOriginalPrice = (price, discount) => {
  const originalPrice = parseFloat(price) / (1 - parseFloat(discount) / 100);
  return originalPrice.toFixed(2);
};
const goBack = () => {
  window.history.back();
};
</script>

<style scoped>
  </style>
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