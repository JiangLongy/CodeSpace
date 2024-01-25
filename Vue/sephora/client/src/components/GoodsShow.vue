<template>
  <div class="pb-[126px]">
    <!-- 搜索到数据就显示 -->
    <div class="grid grid-cols-2 gap-4 p-4" v-if="searchStore.goods.data.length">
      <div v-for="item in searchStore.goods.data" :key="item.id" class="bg-white rounded-md overflow-hidden shadow-md"
        @click="goToBuyGoods(item)">
        <img :src="item.image_url" alt="" class="w-full h-40 object-cover" loading="lazy">
        <div class="p-4">
          <div class="text-sm font-semibold line-clamp-2">{{ item.name }}</div>
          <div class="text-red-500 font-bold mt-2">￥{{ item.price }}</div>
        </div>
      </div>
    </div>
    <!-- 没有就显示这里没有你想要的东西哦 -->
    <div v-else>
      <van-empty image="https://img.88icon.com/download/jpg/20201103/99ccfe3ebbc2a54599c58db324b3327c_512_512.jpg!bg"
        description="没有找到你想要的东西哦！" />
    </div>
    <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->

<van-back-top right="5vw" bottom="20vh"/>
  </div>
</template>

<script setup>
import { useSearchStore } from '../store/search';
import { useRouter } from 'vue-router';
const searchStore = useSearchStore();
const router = useRouter();

const goToBuyGoods = (item) => {
  // 将商品信息作为参数传递到'/buygoods'页面
  router.push({
    path: '/buygoods',
    query: {
      id: item.id, name: item.name,
      price: item.price, img: item.image_url,
      stock: item.stock_quantity, desc: item.description,
      category: item.category, brand: item.brand, discount: item.discount,
      /* 其他商品信息 */
}
  });
}
</script>
