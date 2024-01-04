// store 提供数据 ，router 提供角色数据
import { defineStore } from 'pinia'
// 不同的角色的权限
export  const  usePermissStore = defineStore('permiss',()=>{
    return {
        //角色列表
        roleList:{
            admin:['1','2','3'],
            user:['1'] //403
        }
    }
})