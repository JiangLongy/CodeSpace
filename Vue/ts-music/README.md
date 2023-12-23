# TypeScript 让工资+10%
- 让前端像写JAVA一样写大型项目 代码一万行+
- vue/react + typescript 
- es6
   弱类型还是没有，缺点是容易出问题
   let banners:[int] = [1,2,3]
- typescript 是 js 的超集
- 给项目引入前端模型层
   - 路由已经不是后端的，前端也可以有
   - 前端也可以有自己的模型，MVVM
- UI组件和数据管理的分离
   - store / components|views
   - pinia defineStore('todos',()=>{
      return {
         state,...actions
      }
   }) useTodoStore 
   - vue ref 
   - 这里是唯一请求 axios 接口的地方
   - app.use(createPinia())
   - 引入这个模块，执行 useTodosStore 方法
const { todos } = toRefs(useTodosStore())
const { getTodos } = useTodosStore()

- vue 项目开发设计模式
   - 越复杂的，只要是流程，其实很简单，只不过需要一本说明书
   - UI组件 + 数据管理
   - 数据的流向
      backend ->model(约束) -> api -> store  -> component 
   - SPA
      router -> views -> components 
   - APP = VUE + VUERouter + pinia + ts
   - 写UI组件
      ElementPlus(熟悉) + views + components(common|components) + 
      Tailwindcss(熟悉) + 组件设计艺术

- App.vue 一个个组件慢慢搭
   <>defineProps
   - 不要用ts 