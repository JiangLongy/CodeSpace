//hooks 函数式编程思想
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { usePersonalized } from '../api/index'
import type { Personalized } from '../models/personalized'

//专注于数据管理
export const usePersonalizedStore = defineStore('personalized',()=>{
    const personalizedMV = ref<Personalized[]>([])
    const getPersonalized = async ()=>{
        if(personalizedMV.value.length) return ;
        const result = await usePersonalized();
        personalizedMV.value = result
    }
    return {
        personalizedMV,
        getPersonalized
    }
})
