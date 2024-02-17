<template>
    <div>
        <p>Home</p>
        <!-- <Hello/> -->
    </div>
</template>

<script setup>
import { onMounted,onActivated,onDeactivated,onUnmounted } from 'vue';
import Hello from '../components/Hello.vue';

onMounted(()=>{
    console.log('Home mounted');
})
onUnmounted(()=>{//当组件被卸载时触发
    console.log('Home unmounted');
})
onActivated(()=>{//当被缓存的组件再次生效时触发
    console.log('Home activated');
})
onDeactivated(()=>{//当组件被缓存起来时触发
    console.log('Home deactivated');
})
</script>

<style lang="scss" scoped>

</style>