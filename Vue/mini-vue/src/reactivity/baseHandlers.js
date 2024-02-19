import {track,trigger} from "./effect.js"
const get = createGetter()
const set = createSetter()
function createGetter(){
    return function get(target, key,receiver){
        //这个属性究竟还有哪些地方用到了（副作用函数的收集,computed,watch等等）
        track(target,key)
        return Reflect.get(target, key,receiver);
    }
}
function createSetter(){
    return function set(target, key, value,receiver) {
        //需要记录下来此时是哪一个key的值变更了，再去通知其他依赖该值的函数生效，更新浏览器的视图（响应式）
        //触发被修改的属性身上的副作用函数 依赖收集（被修改的key在哪些地方被用到了） 发布订阅
        trigger(target,key)
        return Reflect.set(target, key, value,receiver);
    }
}
export const mutableHandlers = {
    get,
    set,
}