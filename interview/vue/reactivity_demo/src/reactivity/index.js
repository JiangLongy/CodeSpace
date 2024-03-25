// 一个简单的响应式模型，通过reactive/ref 把数据包裹成响应式对象
//  并且通过effect函数注册回调函数，然后在修改数据后，响应式地通知effect去执行回调函数
// 大型项目都会在每个模块(目录)下统一向外输出(清单)
export {effect} from './effect'
export {reactive} from './reactive'
export {ref} from './ref'





