import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        name:'home',
        component:()=>import('../views/home.vue'),
        meta:{
            title:'首页'
        }
    },
    {
        path:'/about',
        name:'about',
        component:()=>import('../views/about.vue'),
        meta:{
            title:'关于'
        },
        //路由的独享守卫
        // beforeEnter:(to,from,next)=>{
        //     console.log(to,from);
        //     next()
        // }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
//全局的前置钩子
// router.beforeEach((to,from,next)=>{
//     // console.log(to,from); 
//     document.title = to.meta.title
//     if(to.path != '/'){
//         const isLogin = localStorage.getItem('isLogin')
//         if(isLogin){
//             next()
//         }else{
//             // router.push('/login')
//             alert('未登录')
//             return 
//         }
//     } 
//     next()
// })
//全局的解析守卫
// router.beforeResolve((to,from,next)=>{
//     console.log(to,from);
// })

//全局的后置钩子
// router.afterEach((to,from,next)=>{
//     console.log(to,from);
// })
export default router