<template>
   员工信息
   <div>姓名:{{person.name}}</div>
   <div>年龄:{{person.age}}</div>
   <div>工资:{{person.salary}}</div>
   <button @click="addSalary">涨工资</button>
</template>

<script setup>
import {ref} from 'vue'
let person = ref({
    name:'张三',
    age:18,
    salary:10000
})
const addSalary = ()=>{
    person.value.salary += 1000
    console.log(person.value);
}
</script>
<style lang="css" scoped>
</style>