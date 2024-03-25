import { reactive } from "./reactive";

const get = createGetter()
const set = createSetter()
// 浅 下一层的就不监听 {a:{b:2}} obj.a.b

function createGetter(shallow = false){
    // 闭包 shallow
    return function get (target, key, receiver){
        // 映射 reflection  === target[key]
        // proxy 做自动的懒代理
        const res = Reflect.get(target,key, receiver)
        track(target,"get",key);
        if(isObject(res)){
            return shallow?res:reactive(res)
        }
        return res
    }
}
// {a:{b:{c:3}}}
// Proxy 优势 懒代理 性能
function createSetter(){

}
export const mutableHandlers = {
    get,
    set
}

export const shallowReactiveHandlers = {
    get,
    set
}