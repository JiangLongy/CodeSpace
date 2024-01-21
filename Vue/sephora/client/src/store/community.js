import { defineStore } from 'pinia'
import axios from '../api';
export const useCommunityStore = defineStore('community',{
    state(){
        return {
            data:[],
            value:'',
            currentType:'全部'
        }
    },
    getters:{
        change(type){
            this.currentType = type
        }
    },
    actions:{
       async getNote(){
        try {
            const response = await axios.post('/noteGet',{
                type:this.currentType
            })
            console.log(response);
            this.data = response.data;
            console.log(this.data[0].id);
        } catch (error) {
            
        }
       }
    }
})