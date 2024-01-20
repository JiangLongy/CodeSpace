<template>
    <div class="h-screen flex flex-col">
        <!-- 搜索框 -->
        <div class=
        "bg-white dark:bg-gray-800 
        shadow-sm fixed top-0 left-0 
        right-0 z-10 py-2 px-4"
        @click="goSearch">
            <van-search v-model="BarsStore.value" :placeholder="currentIn" />
        </div>

        <!-- 商品分类与内容区域 -->
        <div class="flex-1 h-full relative flex flex-row mt-[70px] mb-[50px] ">
            <!-- 左侧商品分类（占20%） -->
            <div class="fixed top-18 left-0 h-full w-20 bg-white dark:bg-gray-800 shadow-md">
    <van-sidebar v-model="active">
        <van-sidebar-item 
            v-for="(item,index) in BarsStore.barList" 
            :key="index" 
            :title="item.title"
            @click="change(index)"
        />
    </van-sidebar>
</div>


            <!-- 右侧内容区域（填充剩余空间） -->
            <div class="bg-gray-100 dark:bg-gray-900 w-full flex-1 p-4 ml-20">
                <BarsGoods />
            </div>
        </div>
    </div>
</template>
  

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useSearchStore } from '../store/search'
import { useBarsStore } from '../store/bars'
import BarsGoods from '../components/BarsGoods.vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const searchStore = useSearchStore()
const BarsStore = useBarsStore();

onMounted(() => {
    searchStore.change();
})
onBeforeUnmount(() => {
    searchStore.stop();
})


const currentIn = computed(() => searchStore.currentIn)
const active =ref(0);
const change = (index) => {
    BarsStore.changeId(index);
};
const goSearch = ()=>{
    router.push('/search');
};
</script>

<style lang="less" scoped></style>