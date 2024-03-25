import { inject,reactive,computed } from 'vue'
const STORE_KEY = '__store__'
// vue3.0  版本
function useStore() {
    return inject(STORE_KEY)
}
class Store {
    constructor(options) {
        this.$options = options
        // 私有的
        // store.state.  proxy
        this._state = reactive({
            data:options.state()
        })
        this._mutations = options.mutations
        this._actions = options.actions
        this.getters = {}

        Object.keys(options.getters).forEach(name=>{
            const fn = options.getters[name]
            this.getters[name] = computed(()=>fn(this.state))
        })
    }
    get state() {
        //get
        return this._state.data
    }
    commit = (type,payload)=>{
        const entry = this._mutations[type]
        entry && entry(this.state,payload)
    }
    dispatch(type,payload) {
        const entry = this._actions[type]
        return entry && entry(this,payload)
    }
    install(app) {
        // 电台 发布者
        app.provide(STORE_KEY, this)// provide vue内置方法
    }
}
// 单一状态数对象
function createStore(options) {
    return new Store(options)
}


export { createStore , useStore }