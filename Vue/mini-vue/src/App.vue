<template>
  <div>
    <p>{{state.count}}</p>
    <button @click="state.count++">add</button>
  </div>
</template>

<script setup>
// import { effect } from './reactivity/effect';
// import {reactive} from './reactivity/reactive';
import {reactive,effect, watchEffect, ref} from 'vue'
const state = reactive({
  count: 1
})
const age = ref(18)
// effect(() => {
//   console.log(state.count)
// },
// {
//   lazy: false,
//   scheduler(){//当调度函数生效的时候，副作用函数就不再触发
//     console.log('scheduler调度器执行')
//   }
// })
// watchEffect(() => {
//   console.log('watchEffect',state.count)
// },
// {
//   flush:'post',
//   onTrack:() => {
//     console.log('onTrack')
//   },
//   onTrigger:() => {
//     console.log('onTrigger')
//   }
// }
// )

</script>

<style lang="css" scoped>

</style>