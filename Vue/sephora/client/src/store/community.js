import { defineStore } from 'pinia'
import axios from '../api';
export const useCommunityStore = defineStore('community',{
    state(){
        return {
            data:[],
            value:'',
            note:[]
        }
    },
    getters:{
    },
    actions:{
       async getNote(type){
        try {
            const response = await axios.post('/noteGet',{
                type:type
            })
            console.log(response);
            this.data = response.data;
            console.log(this.data);
        } catch (error) {
            console.log(error);
        }
       },
       async getNoteDetail(id){
        try {
            const response = await axios.post('/noteDetailGet',{
                id:id
            })
            this.note = response.data;
            // console.log(this.note);
        }
        catch (error) {
            console.log(error);
        }
       }
    }
})