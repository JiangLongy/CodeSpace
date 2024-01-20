import { defineStore } from 'pinia'
export const useSearchStore = defineStore('search', {
    state: () => {
        return {
            inList: [
                '宝藏小众香氛',
                '专研精准护肤',
                '折扣直降狂欢',
                
            ],
            in:'宝藏小众香氛',
            count:1,
            intervalId: null,
            value:''
        }
    },
    getters:{
        currentIn(state){
            return state.in
        }
    },
    actions:{
        //定时器，修改搜索框中的默认内容
        change(){
            this.intervalId=setInterval(()=>{
                if(this.count<2){
                    this.count++
                }else{
                    this.count=0
                }
                this.in = this.inList[this.count]
            },5000)
        },
        stop(){
            clearInterval(this.intervalId);
            this.intervalId = null
        }
    }
})