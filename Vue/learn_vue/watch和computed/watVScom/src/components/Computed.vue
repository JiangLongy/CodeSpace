<template>
    <div>{{person.name}}</div>
    <div>{{person.age}}</div>
    <!-- <div>{{person.hobby.length > 0 ?'你干嘛':'哎哟！'}}</div> -->
    <!-- <div>{{active}}</div> -->
    <div>{{active2}}</div>
   
    <button @click="person.hobby.pop()">减爱好</button>
    <button @click="person.age++">坤坤长大</button>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

let person = ref({
    name:'坤坤',
    hobby:['唱','跳','rap','篮球'],
    age:18
});

let active = computed(()=>{
    console.log('computed触发');
    return person.value.hobby.length > 0 ?'你干嘛':'哎哟！'
})

let active2 = computed(()=>{
    console.log('computed触发');
    return person.value.hobby.join(',');
})

watch(() => person.value.age, (newAge, oldAge) => {
    console.log(`坤坤从${oldAge}长到${newAge}岁了`);
})
// const method = ()=>{
//     console.log('method触发');
//     return person.value.hobby.length > 0 ?'你干嘛':'哎哟！'
// }
</script>

<style lang="scss" scoped>

</style>