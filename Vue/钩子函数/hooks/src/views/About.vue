<template>
    <div>
        <p>about</p>
        <Hello />
    </div>
</template>

<script setup>
import {onBeforeRouteUpdate,onBeforeRouteLeave} from 'vue-router'
import {onMounted} from 'vue'
import Hello from '../components/Hello.vue';
// onBeforeRouteLeave((to,from,next)=>{
//     console.log(to,from)
//     const flag = window.confirm('你确定要离开这个页面吗？')
//     if(flag){
//         next()
//     }
// } )
onMounted(()=>{
    console.log('About mounted');
})
</script>

<style lang="css" scoped>

</style>