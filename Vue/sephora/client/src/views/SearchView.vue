<template>
    <div>
        <!-- 头部 -->
        <van-row class="h-14 shadow-sm bg-white fixed top-0 left-0 right-0 z-999">
            <van-col span="4" class="flex items-center justify-center" @click="toSearch">
                <van-icon name="arrow-left" size="25" class="mt-4 ml-3" />
            </van-col>
            <van-col span="16" class="flex items-center justify-center" @click="toSearch">
                <van-search :placeholder="searchStore.value" />
            </van-col>
            <van-col span="4" size="30" class="flex items-center justify-center mt-4 pl-2">
                <van-icon name="ellipsis" />
            </van-col>
        </van-row>
        <!-- 商品 -->
        <div class="pt-[60px]">
            <GoodsShow />
        </div>
    </div>
</template>

<script setup>
import {useSearchStore} from '../store/search';
import { useRouter } from 'vue-router';
import GoodsShow from '../components/GoodsShow.vue';
import { onMounted } from 'vue';

const router = useRouter();
const searchStore = useSearchStore();
const toSearch = () => {
    router.push('/search');
}
onMounted(() => {
    searchStore.search(searchStore.value)
    console.log(searchStore.goods);
})
</script>

<style lang="scss" scoped></style>