// import {createWebHistory,createRouter} from 'vue-router'
import {createWebHashHistory,createRouter} from './myRouter'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/about',
        name:'about',
        component:About
    }
]

const router = createRouter({
    history:createWebHashHistory(),//history模式 hash模式
    routes
})

export default router