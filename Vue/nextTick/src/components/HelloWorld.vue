<template>
  <div>
    <p ref="refP">消息:{{message}}</p>
    <button @click="updateMsg">更新消息</button>
  </div>
</template>

<script setup>
import {ref,nextTick} from 'vue'
const message = ref('Hello World')
const refP = ref(null)
console.log(refP.value);

nextTick(()=>{
  console.log(refP.value);
})

const updateMsg = ()=>{
  message.value="更新之后的消息"
  console.log(document.querySelector('p'));
  // console.log(refP.value);
}
// setTimeout(() => {
//   console.log(refP.value);
// }, 1000)
</script>

<style lang="css" scoped>

</style>