<template>
    <div>
        <router-view />
        <van-tabbar route>
            <van-tabbar-item replace to="/home" icon="wap-home">首页</van-tabbar-item>
            <van-tabbar-item replace to="/bars" icon="bars">分类</van-tabbar-item>
            <van-tabbar-item replace to="/community" icon="smile">社区</van-tabbar-item>
            <van-tabbar-item replace to="/bag" icon="bag">购物车</van-tabbar-item>
            <van-tabbar-item replace to="/mine" icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script setup>

</script>

<style lang="less" scoped></style>