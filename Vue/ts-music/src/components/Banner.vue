<template>
    <div>
        <ul>
            <li v-for="banner in banners" :key="banner.targetId">
                <img :src="banner.pic">
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>

import { useBannerStore } from '../store/banner'
import { toRefs,onMounted } from 'vue';
const { banners } = toRefs(useBannerStore());
const { getBanners } = useBannerStore();

onMounted( async ()=>{
  await getBanners()
})

</script>

<style scoped></style>