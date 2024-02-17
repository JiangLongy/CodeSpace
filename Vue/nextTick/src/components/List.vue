<template>
    <div>
        <button @click="updateList">更新列表</button>
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
    </div>
</template>

<script setup>
import { nextTick,ref } from 'vue';
import {myNextTick} from '../components/nextTick'
const list = ref(new Array(20).fill(0))
const updateList = ()=>{
    list.value.push(...new Array(10).fill(1))
    
    myNextTick(()=>{
        const liItem = document.querySelector('li:last-child')
        liItem.scrollIntoView({behavior:'smooth'})
    })
    // const liItem = document.querySelector('li:last-child')
    // liItem.scrollIntoView({behavior:'smooth'})
}
</script>

<style lang="css" scoped>
li{
    height: 100px;
    margin: 10px;
    background: red;
}
</style>