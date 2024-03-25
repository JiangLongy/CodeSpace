import {mutableHandlers} from './baseHandlers.js'
// 可读性的接口
// vue的API比react好 API的简洁

//缓存 vue的组件代码可能有很多 多人开发
export const reactiveMap = new WeakMap()
export function reactive(target){
    //提升可读性
    return createReactiveObject(
        target,reactiveMap,mutableHandlers     
    )
}
// 性能优化 proxyMap
// 将proxyHandlers进行一个模块化分离  proxy区别于defineProperty操作更多
function createReactiveObject(target,proxyMap,proxyHandlers){
    if(typeof target !== 'object'){
        console.warn(`reactive${target}必须是一个对象`);
        return target
    }
    const existingProxy = proxyMap.get(target)
    if(existingProxy){
        console.log('-----------cached',target);
        return existingProxy
    }
    const proxy = new Proxy(target,proxyHandlers)
    proxyMap.set(target,proxy)
    return proxy
}
