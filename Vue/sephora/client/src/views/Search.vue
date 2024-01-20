<template>
    <div>
        <!-- 搜索框上方的部分 -->
        <div class="flex justify-between items-center">
            <span class="font-semibold mt-5 ml-5 text-xl">搜索</span>
            <span class="mr-5 mt-8 text-sm" @click="goBack">取消</span>
        </div>

        <!-- 搜索框部分 -->
        <div class="mt-4"> <!-- 调整上边距以增加间距 -->
            <SearchPop />
        </div>
        <!-- 搜索框下方的部分 -->
        <div>
            <div class="font-semibold mt-5 ml-5">搜索发现</div>
            <van-row gutter="5" class="mt-5 text-xs text-center">
                <van-col span="8" class=" p-2 rounded mb-2">黑金卡专享福利</van-col>
                <van-col span="8" class=" p-2 rounded mb-2">大牌同款买赠</van-col>
                <van-col span="8" class=" p-2 rounded mb-2">会员享7.5折</van-col>
                <van-col span="8" class=" p-2 rounded mb-2">独家尖货大放送</van-col>
                <van-col span="8" class=" p-2 rounded mb-2">必买上新好物</van-col>
            </van-row>
        </div>
    </div>
</template>
  

<script setup>
import SearchPop from '../components/SearchPop.vue';
const goBack =()=>{
    window.history.back();
}
</script>

<style lang="scss" scoped></style>