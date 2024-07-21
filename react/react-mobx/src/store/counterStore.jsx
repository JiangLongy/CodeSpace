import {makeAutoObservable} from 'mobx'

class CounterStore {
    count = 0
    list = [1,2,3,4,5,6]
    constructor(){
        makeAutoObservable(this)//当类中的属性值变更，就会触发组件更新
    }
    addCount = ()=>{
        this.count+=1
    }
    get newList(){
        return this.list.map(item=>item*10)
    }
    pushList = ()=>{
        this.list.push(this.list.length+1)
    }
}

const counter = new CounterStore()

export default counter