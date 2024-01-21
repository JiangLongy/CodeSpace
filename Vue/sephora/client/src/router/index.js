import {createRouter,createWebHistory} from 'vue-router'

const routes = [

    {
        path:'/',
        redirect: '/layout',
    },
    {
        path:'/searchview',
        name:'searchview',
        component:()=> import('../views/SearchView.vue'),
        meta:{
            title:'搜索详情'
        }
    },
    {
        path:'/search',
        name:'search',
        component:()=> import('../views/Search.vue'),
        meta:{
            title:'搜索'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
        meta:{
            title:'登录'
        }
    },
    {
        path:'/register',
        name:'register',
        component:()=> import('../views/Register.vue'),
        meta:{
            title:'注册'
        }
    },
    {
        path:'/layout',
        name:'layout',
        component: () => import('../views/layout.vue'),
        children:[
            {
                path:'/layout',
                redirect:'/home'
            },
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/Home.vue'),
                meta:{
                    title:'主页'
                }
            },
            {
                path:'/bars',
                name:'bars',
                component:() => import('../views/Bars.vue'),
                meta:{
                    title:'分类'
                }
            },
            {
                path:'/community',
                name:'community',
                component:() => import('../views/Community.vue'),
                meta:{
                    title:'社区'
                }
            },
            {
                path:'/bag',
                name:'bag',
                component:() => import('../views/Bag.vue'),
                meta:{
                    title:'购物车'
                }
            },
            {
                path:'/mine',
                name:'mine',
                component:() => import('../views/Mine.vue'),
                meta:{
                    title:'我的'
                }
            }
        ]
    }
   
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
const whitePath = ['/login','/register']
router.beforeEach((to,from,next)=>{
  // console.log(to,from);
  document.title = to.meta.title
  if(!whitePath.includes(to.path)){//你想去详情页
    if(!sessionStorage.getItem('userInfo')){ // 没登录
      router.push('/login')
      return 
    }
    next()
    return 
  }
  next()
})
export default router