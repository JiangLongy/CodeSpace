<template>
    <van-search
        v-model="value"
        show-action
        placeholder="专研精准护肤"
        @search="onSearch"
        class="pr-0"
    >
    <template #action>
        <div @click="onClickButton" 
        class="bg-black text-white rounded-r-lg w-20 text-center"
       
        >搜索</div>
    </template>
    </van-search>
</template>

<script setup>

</script>

<style lang="less" scoped></style>