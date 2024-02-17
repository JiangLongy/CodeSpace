<template>
    <div>watch 和 computed 的区别</div>
    <div>宽:{{width}}</div>
    <div>高:{{height}}</div>
    <div>面积:{{getArea}}</div>
    <button @click="addWidth">增加宽度</button>
    <button @click="addHeight">增加高度</button>
    </template>
    
    <script setup>
    import { computed, watch,ref } from 'vue';
    
    let width = ref(100);
    let height = ref(100);
    
    const addWidth = () => {
      width.value += 100
    }
    const addHeight = () => {
      height.value += 100
    }
    
    let getArea = computed(() => {
      console.log("getArea触发");
      return width.value * height.value;
    });
    watch(width,(width)=>{
      console.log("watch触发");
    
    })
    </script>
    
    <style lang="css" scoped>
    
    </style>