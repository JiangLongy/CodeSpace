<template>
    <van-search v-model="searchStore.value" show-action :placeholder="currentIn" class="pr-0 ">
        <template #action>
            <div @click="onClickButton" class="bg-black text-white rounded-r-lg w-20 text-center">搜索</div>
        </template>
    </van-search>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted } from 'vue';
import { useSearchStore } from '../store/search'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchStore = useSearchStore()
const onClickButton = () => {
    searchStore.search(searchStore.value);
    router.push('/searchview')
}
const currentIn = computed(() => searchStore.currentIn)


onMounted(() => {
    searchStore.change();
})
onBeforeUnmount(() => {
    searchStore.stop();
})


</script>

<style lang="less" scoped></style>