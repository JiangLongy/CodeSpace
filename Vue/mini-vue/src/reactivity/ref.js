import { reactive } from './reactive.js'
import { track, trigger } from './effect.js'
export function ref(val) {//将原始类型的数据变成响应式
    return createRef(val)
}

function createRef(val) {
    //判断val是否已经是响应式
    //将val变为响应式
    if(val.__v__isRef){
        return val
    }
    return new RefImpl(val)
}
// const age = ref(18)
class RefImpl {
    constructor(val) {
        this.__v__isRef = true//给每一个被ref操作过的属性值都添加标记
        this._value = conver(val)
    }
    get value() {
        //为this对象做依赖收集
        track(this, 'value')
        return this._value
    }
    set value(newVal) {
        if (newVal !== this._value) {
            this._value = conver(newVal)
            trigger(this, 'value')//触发'value'上的副作用函数
        }
    }

}

function conver(val){
    if(typeof val !== 'object'||val === null){
        return val
    }else{
        return reactive(val)
    }
}