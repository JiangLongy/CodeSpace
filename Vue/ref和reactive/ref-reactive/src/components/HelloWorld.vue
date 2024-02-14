<template>
  <div>数据a:{{ a }}</div>
  <button @click="add">+1</button>
</template>

<script setup>
import { ref } from "vue";
const a = ref(1)

const add = () => {
 a.value++;
  console.log(a);
};
</script>

<style lang="css" scoped></style>